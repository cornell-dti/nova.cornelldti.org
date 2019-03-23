import StringsBackend from './stringsBackend';

import HomeJSON from './home.json';
import AssetsJSON from './assets.json';
import ApplyJSON from './apply.json';
import InitiativesJSON from './initiatives.json';
import TeamJSON from './team.json';
import ProjectsJSON from './projects.json';
import SponsorJSON from './sponsor.json';
import CoursesJSON from './courses.json';

import EventsJSON from './projects/events.json';
import OrientationJSON from './projects/orientation.json';
import QueueMeInJSON from './projects/queuemein.json';
import ResearchConnectJSON from './projects/researchconnect.json';
import ReviewsJSON from './projects/reviews.json';
import SamwiseJSON from './projects/samwise.json';
import ShoutJSON from './projects/shout.json';

const DEFAULT_CONTEXT = 'default';


const JSONMap = {
  home: HomeJSON,
  assets: AssetsJSON,
  apply: ApplyJSON,
  projects: ProjectsJSON,
  initiatives: InitiativesJSON,
  team: TeamJSON,
  courses: CoursesJSON,
  sponsor: SponsorJSON,
  'projects.events': EventsJSON,
  'projects.orientation': OrientationJSON,
  'projects.queuemein': QueueMeInJSON,
  'projects.researchconnect': ResearchConnectJSON,
  'projects.reviews': ReviewsJSON,
  'projects.samwise': SamwiseJSON,
  'projects.shout': ShoutJSON
};


function searchKey(key, json) {
  let val = json[key];

  let path = '';

  const replacements = [];

  if (typeof val === 'undefined' || val === null) {
    const keys = key.split('.');

    let currentChild = json;

    for (const childKey of keys) {
      if (
        typeof currentChild[childKey] === 'undefined' ||
        currentChild[childKey] === null
      ) {
        if (typeof currentChild['*'] !== 'undefined') {
          path += `/${childKey}`;
          replacements.push(childKey);
          currentChild = currentChild['*'];

          continue;
        } else {
          currentChild = null;
          path = null;
          break;
        }
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
    let newStr = val.replace(
      `$${replacementIndex}$`,
      replacements[replacementIndex - 1]
    );

    replacementIndex += 1;

    while (val !== newStr) {
      val = newStr;

      newStr = val.replace(
        `$${replacementIndex}$`,
        replacements[replacementIndex - 1]
      );

      replacementIndex += 1;
    }
  } else if (typeof val === 'object') {
    val = Object.keys(val);
  }

  return val;
}

/* eslint-disable class-methods-use-this */

export default class JSONStringsBackend extends StringsBackend {
  getDefaultContext() {
    return DEFAULT_CONTEXT;
  }

  resolveContext(context) {
    if (context === this.getDefaultContext()) {
      return HomeJSON;
    }

    return JSONMap[context];
  }

  _getString(key, context) {
    const json = this.resolveContext(context);


    if (json) {
      if (key === '' || key === null) {
        return json;
      }

      if (context === 'assets') { // TODO should we error out if null?
        return `/static${searchKey(key, AssetsJSON)}`;
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
    const json = this.resolveContext(context);

    if (json) {
      return searchKey(key, json);
    }

    return null;
  }
}
