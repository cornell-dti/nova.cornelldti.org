import { CreateElement, VNode, RenderContext } from 'vue';
import MemberProfileModal from '@/components/MemberProfileModal.vue';
import { entryToStrings } from '../preview';

interface Props {
  entry: any;
}

export default (h: CreateElement, cx: RenderContext<Props>): VNode => {
  if (cx.props.entry) {
    const info = entryToStrings(cx.props.entry);

    const toggle = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      return cx.parent.$refs.modalRef.toggleModal();
    };

    return h('div', [
      h(
        'button',
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          innerHTML: 'Show Modal',
          on: {
            click: () => {
              toggle();
            }
          }
        },
        [
          h(MemberProfileModal, {
            props: {
              ref: 'modalRef',
              isStatic: true,
              display: true,
              profile: {
                id: info.netid || undefined,
                info
              }
            }
          })
        ]
      )
    ]);
  }

  return h('div');
};
