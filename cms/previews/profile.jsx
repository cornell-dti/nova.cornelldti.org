import MemberProfileModal from '@/components/MemberProfileModal';
import { entryToStrings } from '../preview';

export default cx => {
  if (cx.props.entry) {
    const info = entryToStrings(cx.props.entry);

    const toggle = () => {
      return cx.parent.$refs.modalRef.toggleModal();
    };

    return (
      <div>
        <button onClick={toggle}>Show Modal</button>

        <MemberProfileModal
          ref="modalRef"
          display={true}
          profile={{
            id: info.netid || undefined,
            info
          }}
        />
      </div>
    );
  }

  return <div />;
};
