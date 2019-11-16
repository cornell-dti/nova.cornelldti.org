import StringsBackend from './stringsBackend';

const HomeJSON = () => import('#/pages/home.json');
const $AssetsJSON = () => import('#/assets.json');
const ApplyJSON = () => import('#/pages/apply.json');
const InitiativesJSON = () => import('#/pages/initiatives.json');
const TeamJSON = () => import('#/pages/team.json');
const ProjectsJSON = () => import('#/pages/projects.json');
const SponsorJSON = () => import('#/pages/sponsor.json');
const CoursesJSON = () => import('#/pages/courses.json');
const NotFoundJSON = () => import('#/pages/notfound.json');

const EventsJSON = () => import('#/projects/events.json');
const FluxJSON = () => import('#/projects/flux.json');
const OrientationJSON = () => import('#/projects/orientation.json');
const QueueMeInJSON = () => import('#/projects/queuemein.json');
const ResearchConnectJSON = () => import('#/projects/researchconnect.json');
const ReviewsJSON = () => import('#/projects/reviews.json');
const SamwiseJSON = () => import('#/projects/samwise.json');
const ShoutJSON = () => import('#/projects/shout.json');

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

const JSONMap = new Map();

/**
 * @param {string} key 
 * @param {*} json 
 */
function searchKey(key, json) {
  let val = json[key];

  let path = '';

  const replacements = [];

  if (typeof val === 'undefined' || val === null) {
    const keys = key.split('.');

    let currentChild = json;

    for (let childKey of keys) {
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
        } else if (Array.isArray(currentChild) && typeof childKey === 'string' && childKey.includes('=')) {
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
  getDefaultContext() {
    return DEFAULT_CONTEXT;
  }

  resolveContext(context) {
    if (!JSONMap.has(context)) {
      if (typeof JSONImports[context] === 'function') {
        return JSONImports[context]().then(json => {
          JSONMap.set(context, json);
          return json;
        });
      }

      console.log(`Failed to resolve context: ${context}`);
      return {};
    }

    return Promise.resolve(JSONMap.get(context));
  }

  _getString(key, context) {
    const json = JSONMap.get(context);

    if (json) {
      if (key === '' || key === null) {
        return json;
      }
      const AssetsJSON = JSONMap.get('assets');
      if (context === 'assets' && AssetsJSON) {
        return `/public${searchKey(key, AssetsJSON)}`;
      }

      if (context === 'assets') {
        throw new Error('No assets JSON initialized');
      }

      return searchKey(key, json);
    }

    return null;
  }

  _exists(key, context) {
    const str = this._getString(key, context);
    return typeof str !== 'undefined' && str !== null;
  }

  _getChildrenKeysFor(key, context) {
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
  resolveContext(context, json) {
    JSONMap.set(context, json);
    return json;
  }

  unresolve(context) {
    JSONMap.delete(context);
  }
}
