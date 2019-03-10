function createAsyncPage(pageName) {
  return () => ({
    component: pageName(),
    // loading: LoadingComponent, //TODO
    // error: ErrorComponent, //TODO
    delay: 200, // Delay before showing the loading component. Default: 200ms.
    timeout: 3000 // The error component will be displayed if a timeout is exceeded
  });
}

const AsyncApply = createAsyncPage(() => import('@/pages/Apply'));
const AsyncCourses = createAsyncPage(() => import('@/pages/Courses'));
const AsyncHome = createAsyncPage(() => import('@/pages/Home'));
const AsyncInitiatives = createAsyncPage(() => import('@/pages/Initiatives'));
const AsyncNotFound = createAsyncPage(() => import('@/pages/NotFound'));
const AsyncProjects = createAsyncPage(() => import('@/pages/Projects'));
const AsyncSponsor = createAsyncPage(() => import('@/pages/Sponsor'));
const AsyncTeam = createAsyncPage(() => import('@/pages/Team'));

const AsyncEvents = createAsyncPage(() => import('@/pages/projects/Events'));
const AsyncOrientation = createAsyncPage(() => import('@/pages/projects/Orientation'));
const AsyncQueueMeIn = createAsyncPage(() => import('@/pages/projects/QueueMeIn'));
const AsyncResearchConnect = createAsyncPage(() => import('@/pages/projects/ResearchConnect'));
const AsyncReviews = createAsyncPage(() => import('@/pages/projects/Reviews'));
const AsyncSamwise = createAsyncPage(() => import('@/pages/projects/Samwise'));
const AsyncShout = createAsyncPage(() => import('@/pages/projects/Shout'));

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
