import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings/lib';
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';

function createAsyncPage(context, pageName) {
  const StringInstance = new StringsFrontend(context, SingleBackend);
  const AsyncHandler = () => ({
    component: StringInstance.initialize()
      .then(() => pageName())
      .then(cmp => ({
        extends: cmp.default,
        data() {
          return { Strings: StringInstance };
        }
      })),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 200,
    timeout: 5000
  });
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    }
  });
}

export default createAsyncPage;
