<template>
  <div>
    <button onClick="{this.toggle}">Show Modal</button>
    <MemberProfileModal
    ref="modalRef"
    display={true}
    profile={{
    id: info.netid || undefined,
    info
    }}
    />
  </div>
</template>

<script>
import MemberProfileModal from '@/components/MemberProfileModal';

export default {
  name: 'ProfilePreview',
  props: {
    entry: {
      required: true
    }
  },
  components: { MemberProfileModal },
  methods: {
    toggle() {
      this.$refs.modalRef.toggleModal();
    }
  },
  computed: {
    get info() {
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

      return info;
    }
  }
};
</script>