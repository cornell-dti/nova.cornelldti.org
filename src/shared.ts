/* eslint-disable no-param-reassign */
/* Node Modules */
import BootstrapVue from 'bootstrap-vue';

import { VueConstructor, CreateElement, RenderContext } from 'vue';
import StringsFrontend, { StringsData } from '@/strings/strings';
import SingleBackend from '@/strings/lib';
import { makeStrings } from './strings/context';

import { Member, Team, Company, Role } from './vue';

export { Member, Team, Company, Role } from './vue';

class AsyncDatasetBuilder<T, K> {
  protected _fn: () => Promise<{ default: T }>;

  protected _accessor: (a: T) => K;

  constructor(fn: () => Promise<{ default: T }>, a: (a: T) => K) {
    this._fn = fn;
    this._accessor = a;
  }

  build() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return new AsyncDataset(this._fn, this._accessor);
  }
}

class AsyncDatasetFn<T> extends AsyncDatasetBuilder<T, T> {
  constructor(fn: () => Promise<{ default: T }>) {
    super(fn, a => a);
  }

  accessor<K>(accessor: (a: T) => K) {
    const { _fn } = this;
    return new AsyncDatasetBuilder(_fn, accessor);
  }
}

class AsyncDatasetAcc<T, K> {
  private _accessor: (a: T) => K;

  constructor(a: (a: T) => K) {
    this._accessor = a;
  }

  import(fn: () => Promise<{ default: T }>) {
    return new AsyncDatasetBuilder(fn, this._accessor);
  }
}

export class AsyncDataset<T, K = {}> {
  data!: T;

  fn: () => Promise<{ default: T }>;

  accessor: (a: T) => K;

  constructor(fn: () => Promise<{ default: T }>, a: (a: T) => K) {
    this.fn = fn;
    this.accessor = a;
  }

  static import<T>(fn: () => Promise<{ default: T }>) {
    return new AsyncDatasetFn(fn);
  }

  static accessor<T, K>(accessor: (a: T) => K) {
    return new AsyncDatasetAcc(accessor);
  }

  async initialize() {
    this.data = (await this.fn()).default;
    return true;
  }

  get(): K {
    return this.accessor(this.data);
  }
}

export function shared(Vue: VueConstructor) {
  const AssetStrings = new StringsFrontend('assets', SingleBackend);

  const memberSet = AsyncDataset.import(() =>
    import(/* webpackPrefetch: true */ '@/../data/generated/members.json')
  )
    .accessor(d => d as Member[])
    .build();

  const companiesSet = AsyncDataset.import(() =>
    import(/* webpackPrefetch: true */ '@/../data/sets/companies.json')
  )
    .accessor<Company[]>(d => d.companies)
    .build();

  const teamsSet = AsyncDataset.import(() =>
    import(/* webpackPrefetch: true */ '@/../data/sets/teams.json')
  )
    .accessor<Team[]>(d => d.teams)
    .build();
  const rolesSet = AsyncDataset.import(() =>
    import(/* webpackPrefetch: true */ '@/../data/sets/roles.json')
  )
    .accessor<Role[]>(d => d.roles)
    .build();

  Vue.mixin({
    data() {
      return {
        AssetStrings
      };
    },
    methods: {
      joinPath(...parts: any[]) {
        const first = parts[0].split('://');
        const beginning = first[0];
        const url = [] as string[];

        if (first.length > 1) {
          url.push(`${beginning}://`);
          const slice = first.slice(1);
          url.push(
            ...slice
              .join('://')
              .split('/')
              .filter((value: string) => value !== '')
          );
        } else {
          url.push(`${beginning}`);
          url.push(...beginning.split('/').filter((value: string) => value !== ''));
        }

        url.push(
          ...parts
            .slice(1)
            .join('/')
            .split('/')
            .filter(value => value !== '')
        );

        return url.join('/');
      },
      getMembers() {
        return memberSet.get();
      },
      getRoles() {
        return rolesSet.get();
      },
      getTeams() {
        return teamsSet.get();
      },
      getCompanies() {
        return companiesSet.get();
      }
    }
  });

  Vue.component('Strings', {
    name: 'Strings',
    functional: true,
    props: {
      strings: {
        default: () => ({})
      },
      source: {
        default: ''
      }
    },
    render(h, cx) {
      const prop: string | { [key: string]: string } | string[] = cx.props.strings;
      let resolvedStrings:
        | { [key: string]: StringsData }
        | StringsData
        | StringsData[]
        | null = null;
      const { source } = cx.props;
      const Strings = source
        ? new StringsFrontend(source, SingleBackend)
        : (cx.parent as any).Strings || makeStrings(cx.parent.$context);

      if (typeof prop === 'string') {
        resolvedStrings = Strings.get(prop);
      } else if (Array.isArray(prop)) {
        resolvedStrings = prop.map(p => Strings.get(p));
      } else {
        resolvedStrings = Object.fromEntries(
          Object.entries({ ...prop }).map(([k, v]) => {
            return [k, Strings.get(v)];
          })
        );
      }

      const { strings: slot } = cx.scopedSlots;

      if (slot) {
        const node = slot(resolvedStrings);

        if (node) {
          return node;
        }
      }

      return h();
    }
  });

  Vue.component('StringsDomain', {
    name: 'StringsDomain',
    functional: true,
    props: {
      value: {
        required: true
      }
    },
    render(h: CreateElement, cx: RenderContext<{ value: unknown }>) {
      const { key: slot } = cx.scopedSlots;

      if (slot) {
        const node = slot(cx.props.value);

        if (node) {
          return node;
        }
      }

      return h();
    }
  });
  Vue.use(BootstrapVue);

  return [
    AssetStrings.initialize(),
    memberSet.initialize(),
    companiesSet.initialize(),
    teamsSet.initialize(),
    rolesSet.initialize()
  ];
}
