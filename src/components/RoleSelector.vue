 <template>
  <b-row class="filter-btn-group">
    <b-col :cols="density == 'compact' ? 'auto' : null" class="my-auto text-center">
      <div :class="btnCSS(roleId === '', density, dark)" @click="roleId = ''">
        All
      </div>
      <div :class="selectorCSS(roleId === '', dark)" />
    </b-col>
    <b-col v-for="role of getRoles()" :cols="density === 'compact' ? 'auto' : null" :key="role.id"
      class="my-auto text-center">
      <div :class="btnCSS(roleId === role.id, density, dark)" @click="roleId = role.id">
        {{role.name}}
      </div>
      <div :class="selectorCSS(roleId === role.id, dark)" />
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped>
.filter-btn-group {
  justify-content: center;
}

.filter-btn,
.selected-filter-btn {
  margin: 1rem;
  background-color: transparent;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &.fg-dark {
    color: #4a4a4a !important;

    &:hover,
    &:focus {
      text-decoration: none !important;
      color: #9a9a9a !important;
    }
  }

  &.fg-light {
    color: #fefefe !important;

    &:hover,
    &:focus {
      text-decoration: none !important;
      color: #dadada !important;
    }
  }

  &.density-compact {
    margin: 0.1rem;
  }
}

.selector {
  background-color: transparent;
  transition: background-color 500ms linear;
  width: 1rem;
  height: 0.1rem;
  margin: 0 auto;

  &.selected {
    &.fg-dark {
      background-color: #4a4a4a !important;
    }

    &.fg-light {
      background-color: #fefefe !important;
    }
  }
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
    },
    density: {
      type: String,
      default: 'compact'
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
    btnCSS(selected, density, isDark = false) {
      return [
        selected ? 'selected-filter-btn' : 'filter-btn',
        isDark ? 'fg-light' : 'fg-dark',
        density === 'compact' ? 'density-compact' : null
      ];
    },
    selectorCSS(selected, isDark = false) {
      return selected
        ? ['selector', 'selected', isDark ? 'fg-light' : 'fg-dark']
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
