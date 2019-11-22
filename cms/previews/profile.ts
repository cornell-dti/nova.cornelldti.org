import MemberProfileModal from '@/components/MemberProfileModal.vue';
import { entryToStrings } from '../preview';

export default (h, cx) => {
  if (cx.props.entry) {
    const info = entryToStrings(cx.props.entry);

    const toggle = () => {
      return cx.parent.$refs.modalRef.toggleModal();
    };

    return h('div', [
      h(
        'button',
        {
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
