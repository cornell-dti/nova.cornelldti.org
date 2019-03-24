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

export default createAsyncPage;
