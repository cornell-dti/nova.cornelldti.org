/* eslint-disable no-param-reassign */
/* Node Modules */
import BootstrapVue from 'bootstrap-vue';
import Vue, { VNode } from 'vue';
import ImgixClient from 'imgix-core-js';

/* Data */

/* Core Files */

import { DirectiveBinding } from 'vue/types/options';
import StringsFrontend from '@/strings/strings';
import SingleBackend from '@/strings/lib';

const AssetStrings = new StringsFrontend('assets', SingleBackend);

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

const memberSet = AsyncDataset.import(() =>
  import(/* webpackPrefetch: true */ '#/generated/members.json')
)
  .accessor(d => d as Member[])
  .build();

const companiesSet = AsyncDataset.import(() =>
  import(/* webpackPrefetch: true */ '#/sets/companies.json')
)
  .accessor<Company[]>(d => d.companies)
  .build();

const teamsSet = AsyncDataset.import(() => import(/* webpackPrefetch: true */ '#/sets/teams.json'))
  .accessor<Team[]>(d => d.teams)
  .build();
const rolesSet = AsyncDataset.import(() => import(/* webpackPrefetch: true */ '#/sets/roles.json'))
  .accessor<Role[]>(d => d.roles)
  .build();

const Images = new ImgixClient({
  domain: 'cornelldti.imgix.net'
});

Vue.mixin({
  data() {
    return {
      AssetStrings
    };
  },
  methods: {
    joinPath(...parts: string[]) {
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
            .filter(value => value !== '')
        );
      } else {
        url.push(`${beginning}`);
        url.push(...beginning.split('/').filter(value => value !== ''));
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
    aws(asset = '', extension = '') {
      if (!asset) {
        return '';
      }

      if (extension) {
        return Images.buildURL(
          asset.replace(/^\/public/, '/static').replace(/\.(.*?)$/, `.${extension}`)
        );
      }

      return Images.buildURL(asset.replace(/^\/public/, '/static'));
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

function getValue(binding: DirectiveBinding, el: HTMLElement) {
  let { value } = binding;

  if (value.startsWith('.')) {
    let parent: HTMLElement | null = el;

    while (parent != null) {
      if ('string-domain' in el.dataset) {
        value = `${el.dataset.stringDomain}${value === '.' ? '' : value}`;
        break;
      }

      parent = parent.parentElement;
    }
  }
  return value;
}

Vue.directive('strings-if', (el, binding, vnode) => {
  const value = getValue(binding, el);
  const $this = vnode.context;
  let sibling: Element | null = null;
  if (el != null) {
    sibling = el.nextElementSibling;

    if (sibling == null || (sibling as HTMLElement).dataset.stringsElse !== 'yes') {
      sibling = null;
    }
  }

  if ($this) {
    const { Strings: $ } = $this;
    let test = !$.exists(value);
    const val = $.get(value);

    if (typeof val === 'boolean') {
      test = test && val;
    }

    if (test) {
      el.remove();
    } else if (sibling) {
      sibling.remove();
    }
  } else {
    el.remove();
  }
});

Vue.directive('strings-show', (el, binding, vnode) => {
  const value = getValue(binding, el);
  const $this = vnode.context;
  let sibling: Element | null = null;
  if (el != null) {
    sibling = el.nextElementSibling;

    if (sibling == null || (sibling as HTMLElement).dataset.stringsDefault !== 'yes') {
      sibling = null;
    }
  }

  if ($this) {
    const { Strings: $ } = $this;
    const test = !$.exists(value);
    el.style.display = test ? 'none' : 'block';
    if (sibling) {
      (sibling as HTMLElement).style.display = !test ? 'none' : 'block';
    }
  } else {
    if (sibling) {
      (sibling as HTMLElement).style.display = 'block';
    }

    el.style.display = 'none';
  }
});

Vue.directive('string', (el, binding, vnode) => {
  const $this = vnode.context;
  if ($this) {
    const { Strings: $ } = $this;
    const value = getValue(binding, el);
    const text = $.get(value);
    // eslint-disable-next-line no-param-reassign
    if (binding.arg === 'href') {
      (el as HTMLAnchorElement).href = `${text}`;
    } else {
      el.innerText = `${text}`;
    }
  }
});

Vue.directive('strings-domain', (el, binding, vnode) => {
  // eslint-disable-next-line no-param-reassign
  el.dataset.stringDomain = binding.value;
});

Vue.directive('strings-show-default', (el, binding, vnode) => {
  el.dataset.stringsDefault = 'yes';
});

Vue.directive('strings-else', (el, binding, vnode) => {
  el.dataset.stringsElse = 'yes';
});

Vue.component('Strings', {
  name: 'Strings',
  functional: true,
  props: {
    strings: {
      default: () => ({})
    }
  },
  render(h, cx) {
    const prop: string | { [key: string]: string } | string[] = cx.props.strings;
    let resolvedStrings = {};
    if (typeof prop === 'string') {
      resolvedStrings = cx.parent.Strings.get(prop);
    } else if (Array.isArray(prop)) {
      resolvedStrings = prop.map(p => cx.parent.Strings.get(p));
    } else {
      resolvedStrings = Object.fromEntries(
        Object.entries({ ...prop }).map(([k, v]) => {
          return [k, cx.parent.Strings.get(v)];
        })
      );
    }

    const { strings: slot } = cx.scopedSlots;

    if (slot) {
      const node = slot({ ...resolvedStrings });

      if (node) {
        return node;
      }
    }

    return h();
  }
});

const v = Vue?.extend({});

Vue.component('StringsDomain', {
  name: 'StringsDomain',
  functional: true,
  props: {
    value: {
      required: true
    }
  },
  render(h, cx) {
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

export interface Member {
  netid: string;
  name: string;
  firstName: string;
  lastName: string;
  isLead?: boolean;
  roleId: string;
  otherSubteams?: string | string[] | undefined;
  subteam: string;
  graduation: string;
  major: string;
  doubleMajor: string;
  website: string;
  hometown: string;
  about: string;
  roleDescription: string;
}

export interface Role {
  name: string;
  id: string;
}

export interface Team {
  name: string;
  id: string;
}

export interface Company {
  name: string;
  logo: string;
}

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    getCompanies(): Company[];
    getTeams(): Team[];
    getRoles(): Role[];
    getMembers(): Member[];
    joinPath(...paths: string[]): string;
    aws(path: string): string;
    Strings: StringsFrontend;
    AssetStrings: StringsFrontend;
  }
}

Vue.use(BootstrapVue);

export default function load() {
  return [
    AssetStrings.initialize(),
    memberSet.initialize(),
    companiesSet.initialize(),
    teamsSet.initialize(),
    rolesSet.initialize()
  ];
}
