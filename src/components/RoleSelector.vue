 <template>
  <b-row class="filter-btn-group">
    <b-col class="text-center">
      <div :class="btn(roleId === '', dark)" @click="roleId = ''">
        All
      </div>
      <div :class="selector(roleId === '', dark)" />
    </b-col>
    <b-col class="text-center" v-for="role of getRoles()" :key="role.id">
      <div :class="btn(roleId === role.id, dark)" @click="roleId = role.id">
        {{role.name}}
      </div>
      <div :class="selector(roleId === role.id, dark)" />
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped>
.selector {
  background-color: transparent;
  transition: background-color 500ms linear;
  width: 1rem;
  height: 0.1rem;
  margin: 0 auto;
}

.filter-btn-group {
  justify-content: center;
}

.selector-selected {
  background-color: #4a4a4a !important;
}

.selector-light-selected {
  background-color: #fefefe !important;
}

.filter-btn-light,
.selected-filter-light-btn {
  color: #fefefe !important;
  margin: 1rem;
}

.filter-btn-light:focus,
.filter-btn-light:hover,
.selected-filter-light-btn:focus,
.selected-filter-light-btn:hover {
  text-decoration: none !important;
  color: #dadada !important;
}

.filter-btn,
.selected-filter-btn {
  color: #4a4a4a !important;
  margin: 1rem;
}

.filter-btn:focus,
.filter-btn:hover,
.selected-filter-btn:focus,
.selected-filter-btn:hover {
  text-decoration: none !important;
  color: #9a9a9a !important;
}
</style>


<script>
export default {
  model: {
    prop: 'rolePropId',
    event: 'update:change'
  },
  props: {
    rolePropId: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.roleId = '';
    });
  },
  data() {
    return {
      roleId: {
        type: String,
        default: ''
      }
    };
  },
  methods: {
    btn(selected, isDark = false) {
      if (selected) {
        return [
          isDark ? 'selected-filter-light-btn' : 'selected-filter-btn',
          'btn',
          'btn-link'
        ];
      }

      return [isDark ? 'filter-btn-light' : 'filter-btn', 'btn', 'btn-link'];
    },
    selector(selected, isDark = false) {
      return selected
        ? ['selector', isDark ? 'selector-light-selected' : 'selector-selected']
        : ['selector'];
    }
  },
  watch: {
    roleId($event) {
      this.$emit('update:change', $event);
    }
  }
};
</script>
