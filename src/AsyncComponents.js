import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings';
import ErrorComponent from '@/components/ErrorComponent';

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
    loading: ErrorComponent, // TODO
    error: ErrorComponent, // TODO
    delay: 0,
    timeout: 0 // The error component will be displayed if a timeout is exceeded
  });
}

export default createAsyncPage;
