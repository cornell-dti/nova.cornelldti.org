import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings/lib';
import ErrorComponent from '@/components/ErrorComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';

function createAsyncPage(context: string, pageComponent: () => any) {
  const StringInstance = new StringsFrontend(context, SingleBackend);
  const AsyncHandler = () => ({
    component: StringInstance.initialize()
      .then(() => pageComponent())
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
    render(h: (handler: any, data: any, children: any) => any, { data, children }) {
      return h(AsyncHandler, data, children);
    }
  });
}

export default createAsyncPage;
