import MemberProfileModal from '@/components/MemberProfileModal';

export default {
  name: 'ProfilePreview',
  props: {
    entry: {
      required: true
    }
  },
  methods: {
    toggle() {
      this.$refs.modalRef.toggleModal();
    }
  },
  render() {
    const info = {};

    if (this.entry) {
      [
        'netid',
        'firstName',
        'lastName',
        'name',
        'graduation',
        'major',
        'minor',
        'linkedin',
        'github',
        'hometown',
        'about',
        'subteam',
        'otherSubteams',
        'roleId',
        'roleDescription'
      ].forEach(m => {
        info[m] = this.entry.getIn(['data', m]);
      });
    }

    console.log(`Loading profile with name: ${name}`);

    return (
      <div>
        <button onClick={this.toggle}>Show Modal</button>
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
};
