/* eslint-disable no-param-reassign */

import BootstrapVue from 'bootstrap-vue';

import { VueConstructor, CreateElement, RenderContext } from 'vue';

import StringsFrontend from '@/strings/strings';
import { StringsData } from '@/strings/types';
import SingleBackend from '@/strings/lib';

export { Project, Member, Team, Company, Role } from './types';

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

export function initializeVue(Vue: VueConstructor) {
  const AssetStrings = new StringsFrontend('assets', SingleBackend);

  Vue.mixin({
    data() {
      return {
        AssetStrings
      };
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

      let Strings: StringsFrontend;

      if (source) {
        Strings = new StringsFrontend(source, SingleBackend);
      } else {
        const { parent } = cx;

        if (parent.Strings != null) {
          Strings = parent.Strings;
        } else {
          return h();
        }
      }

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

  return [AssetStrings.initialize()];
}
