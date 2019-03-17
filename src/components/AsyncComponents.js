import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings';

function createAsyncPage(context, pageName) {
  const StringInstance = new StringsFrontend(context, SingleBackend);
  return () => ({
    component: StringInstance.initialize()
      .then(() => pageName())
      .then(cmp => ({
        extends: cmp.default,
        data() {
          return { Strings: StringInstance };
        }
      })),
    // loading: LoadingComponent, //TODO
    // error: ErrorComponent, //TODO
    timeout: 8000 // The error component will be displayed if a timeout is exceeded
  });
}

const AsyncApply = createAsyncPage('apply', () => import('@/pages/Apply'));
const AsyncCourses = createAsyncPage('courses', () => import('@/pages/Courses'));
const AsyncHome = createAsyncPage('home', () => import('@/pages/Home'));
const AsyncInitiatives = createAsyncPage('initiatives', () => import('@/pages/Initiatives'));
const AsyncNotFound = createAsyncPage('notfound', () => import('@/pages/NotFound'));
const AsyncProjects = createAsyncPage('projects', () => import('@/pages/Projects'));
const AsyncSponsor = createAsyncPage('sponsor', () => import('@/pages/Sponsor'));
const AsyncTeam = createAsyncPage('team', () => import('@/pages/Team'));

const AsyncEvents = createAsyncPage('projects.events', () => import('@/pages/projects/Events'));
const AsyncOrientation = createAsyncPage('projects.orientation', () => import('@/pages/projects/Orientation'));
const AsyncQueueMeIn = createAsyncPage('projects.queuemein', () => import('@/pages/projects/QueueMeIn'));
const AsyncResearchConnect = createAsyncPage('projects.researchconnect', () => import('@/pages/projects/ResearchConnect'));
const AsyncReviews = createAsyncPage('projects.reviews', () => import('@/pages/projects/Reviews'));
const AsyncSamwise = createAsyncPage('projects.samwise', () => import('@/pages/projects/Samwise'));
const AsyncShout = createAsyncPage('projects.shout', () => import('@/pages/projects/Shout'));

export {
  AsyncApply,
  AsyncCourses,
  AsyncHome,
  AsyncInitiatives,
  AsyncNotFound,
  AsyncProjects,
  AsyncSponsor,
  AsyncTeam,
  AsyncEvents,
  AsyncOrientation,
  AsyncQueueMeIn,
  AsyncResearchConnect,
  AsyncReviews,
  AsyncSamwise,
  AsyncShout
};
