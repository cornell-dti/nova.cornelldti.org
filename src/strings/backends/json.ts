import StringsBackend from '../backend';

const HomeJSON = () => import(/* webpackPrefetch: true */ '#/pages/home.json');
const $AssetsJSON = () => import(/* webpackPrefetch: true */ '#/assets.json');
const ApplyJSON = () => import(/* webpackPrefetch: true */ '#/pages/apply.json');
const InitiativesJSON = () => import(/* webpackPrefetch: true */ '#/pages/initiatives.json');
const TeamJSON = () => import(/* webpackPrefetch: true */ '#/pages/team.json');
const ProjectsJSON = () => import(/* webpackPrefetch: true */ '#/pages/projects.json');
const SponsorJSON = () => import(/* webpackPrefetch: true */ '#/pages/sponsor.json');
const CoursesJSON = () => import(/* webpackPrefetch: true */ '#/pages/courses.json');
const NotFoundJSON = () => import(/* webpackPrefetch: true */ '#/pages/notfound.json');

const EventsJSON = () => import(/* webpackPrefetch: true */ '#/projects/events.json');
const FluxJSON = () => import(/* webpackPrefetch: true */ '#/projects/flux.json');
const OrientationJSON = () => import(/* webpackPrefetch: true */ '#/projects/orientation.json');
const QueueMeInJSON = () => import(/* webpackPrefetch: true */ '#/projects/queuemein.json');
const ResearchConnectJSON = () =>
  import(/* webpackPrefetch: true */ '#/projects/researchconnect.json');
const ReviewsJSON = () => import(/* webpackPrefetch: true */ '#/projects/reviews.json');
const SamwiseJSON = () => import(/* webpackPrefetch: true */ '#/projects/samwise.json');
const ShoutJSON = () => import(/* webpackPrefetch: true */ '#/projects/shout.json');

const DEFAULT_CONTEXT = 'default';

const JSONImports = {
  home: HomeJSON,
  assets: $AssetsJSON,
  apply: ApplyJSON,
  projects: ProjectsJSON,
  initiatives: InitiativesJSON,
  team: TeamJSON,
  courses: CoursesJSON,
  sponsor: SponsorJSON,
  notfound: NotFoundJSON,
  'projects.events': EventsJSON,
  'projects.orientation': OrientationJSON,
  'projects.queuemein': QueueMeInJSON,
  'projects.researchconnect': ResearchConnectJSON,
  'projects.reviews': ReviewsJSON,
  'projects.samwise': SamwiseJSON,
  'projects.shout': ShoutJSON,
  'projects.flux': FluxJSON
};

const JSONMap = new Map<string, any>();

/**
 * @param {string} key
 * @param {*} json
 */
function searchKey(key: string, json) {
  let val = json[key];

  let path: string | null = '';

  const replacements = [] as Array<string | number>;

  if (typeof val === 'undefined' || val === null) {
    const keys = key.split('.');

    let currentChild = json;

    for (const _childKey of keys) {
      let childKey: string | number = _childKey;
      const asInt = Number.parseInt(`${childKey}`, 10);

      if (Number.isInteger(asInt)) {
        childKey = asInt - 1;
      }

      if (typeof currentChild[childKey] === 'undefined' || currentChild[childKey] === null) {
        if (typeof currentChild['*'] !== 'undefined') {
          path += `/${childKey}`;
          replacements.push(childKey);
          currentChild = currentChild['*'];

          continue;
        } else if (
          Array.isArray(currentChild) &&
          typeof childKey === 'string' &&
          childKey.includes('=')
        ) {
          const [k, v] = childKey.split('=');

          const found = currentChild.find(m => m[k] === v);

          if (typeof found !== 'undefined' && found !== null) {
            path += `/${v}`;
            currentChild = found;
            continue;
          }
        }

        currentChild = null;
        path = null;
        break;
      }

      path += `/${childKey}`;
      currentChild = currentChild[childKey];
    }

    if (typeof currentChild !== 'undefined' && currentChild !== null) {
      val = currentChild;
    }
  } else {
    path = `/${key.split('.').join('/')}/`; // todo
  }

  if (typeof val === 'string') {
    if (path !== null && val.startsWith('~')) {
      val = `${path}${val.substring(1)}`;
    }

    let replacementIndex = 1;
    let newStr = val.replace(`$${replacementIndex}$`, replacements[replacementIndex - 1]);

    replacementIndex += 1;

    while (val !== newStr) {
      val = newStr;

      newStr = val.replace(`$${replacementIndex}$`, replacements[replacementIndex - 1]);

      replacementIndex += 1;
    }
  } else if (typeof val === 'object') {
    val = JSON.parse(JSON.stringify(val));
  }

  return val;
}

/* eslint-disable class-methods-use-this */

export default class JSONStringsBackend extends StringsBackend {
  getDefaultContext(): string {
    return DEFAULT_CONTEXT;
  }

  resolveContext(context: string, ..._) {
    if (!JSONMap.has(context)) {
      if (typeof JSONImports[context] === 'function') {
        return JSONImports[context]().then(json => {
          this.map.set(context, json);
          return json;
        });
      }

      throw new Error(
        `Failed to resolve context: ${context} with arguments: ${JSON.stringify(args)}`
      );
    }

    return Promise.resolve(this.map.get(context));
  }

  _getString(key: string, context: string): string | null {
    const json = JSONMap.get(context);

    if (json) {
      if (key === '' || key === null) {
        return json;
      }
      const AssetsJSON = this.map.get('assets');
      if (context === 'assets' && AssetsJSON) {
        return `${searchKey(key, AssetsJSON)}`;
      }

      if (context === 'assets') {
        throw new Error('No assets JSON initialized');
      }

      return searchKey(key, json);
    }

    return null;
  }

  _exists(key: string, context: string): boolean {
    const str = this._getString(key, context);
    return typeof str !== 'undefined' && str !== null;
  }

  _getChildrenKeysFor(key: string, context: string): string[] | null {
    const json = JSONMap.get(context);

    if (json) {
      const obj = searchKey(key, json);

      if (typeof obj === 'object') {
        return Object.keys(obj);
      }

      return [];
    }

    return null;
  }
}

export class JSONStringsBackendPreview extends JSONStringsBackend {
  resolveContext(context: string, json) {
    JSONMap.set(context, json);
    return json;
  }

  unresolve(context: string) {
    JSONMap.delete(context);
  }
}
