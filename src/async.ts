import {
  FunctionalComponentOptions,
  EsModuleComponent,
  AsyncComponentFactory
} from 'vue/types/options';
import { CreateElement } from 'vue';
import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings/lib';
import ErrorComponent from '@/components/ErrorComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';

function createAsyncPage(
  context: string,
  pageComponent: () => Promise<EsModuleComponent>
): Promise<FunctionalComponentOptions> {
  const StringInstance = new StringsFrontend(context, SingleBackend);
  const AsyncHandler: AsyncComponentFactory = () => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    component: StringInstance.initialize()
      .then(() => pageComponent())
      .then(cmp => {
        return {
          extends: cmp.default,
          data() {
            return { Strings: StringInstance };
          }
        };
      }),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 200,
    timeout: 5000
  });
  return Promise.resolve({
    functional: true,
    render(h: CreateElement, { data, children }) {
      return h(AsyncHandler, data, children);
    }
  });
}

export default createAsyncPage;
