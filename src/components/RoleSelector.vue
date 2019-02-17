<template>
  <div>
    <b-row class="filter-btn-group desktop-selector-container">
      <b-col v-if="showAll" :md="density == 'compact' ? 'auto' : null" class="my-auto text-center">
        <div :class="btnCSS(roleId === '', density, bold, dark)" @click="roleId = ''">All</div>
        <div :class="selectorCSS(roleId === '', dark)"/>
      </b-col>
      <!-- TODO: Cleanup the roles overriding -->
      <b-col
        v-for="role of this.roles === null ? getRoles() : this.roles"
        :md="density === 'compact' ? 'auto' : null"
        :key="role.id"
        class="my-auto text-center"
      >
        <div
          :class="btnCSS(roleId === role.id, density, bold, dark)"
          @click="roleId = role.id"
        >{{role.name}}</div>
        <div :class="selectorCSS(roleId === role.id, dark)"/>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mobile-selector-container text-center">
      <b-col sm="12" md="auto">
        {{ dropdownText }}
        <b-form-select
          :class="mobileSelectorCSS(centered, dark)"
          @change="handleMobileSelection"
          id="mobile-apply-dropdown"
          v-model="roleId"
        >
          <option :class="mobileMenuCSS()" v-if="showAll" :value="''">All</option>
          <option
            :class="mobileMenuCSS()"
            v-for="role of this.roles === null ? getRoles() : this.roles"
            :key="role.id"
            :value="role.id"
          >{{role.name}}</option>
        </b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
.filter-btn-group {
  justify-content: center;
}

.filter-btn,
.selected-filter-btn {
  margin: 1rem;
  margin-bottom: 0rem;
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
  font-size: 2rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.3px;

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

  &.bold {
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.3px;
  }

  &.density-compact {
    margin: 0.1rem;
    font-size: 1.5rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.4px;
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

.apply-row:not(.desktop-selector-container) {
  border-left: 5px solid black;
  font-size: 18px;
  padding-left: 120px;

  &:not(.desktop-selector-container) {
    div[class*='col'] {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 5px;
  }
}

.mobile-selector-container {
  display: none;
  font-size: 1.5rem;
}

@media screen and (max-width: 768px) {
  .desktop-selector-container {
    display: none !important;
  }

  .mobile-selector-container {
    display: flex;
    font-weight: bold;

    #mobile-apply-dropdown {
      background: transparent;

      &.fg-dark {
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #000;
      }

      &.fg-light {
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
      }

      &.centered {
        margin-left: auto;
      }

      .fg-dark {
        color: #000;
      }

      .fg-light {
        color: #fff;
      }

      /* margin: 2rem 0.2rem; */
      -webkit-box-shadow: none;
      box-shadow: none;
      /* display: inline; */
      font-weight: bold;
      padding: 0.5rem 0.5rem;
      width: auto;
      text-decoration: underline;
      font-size: 2rem;
      min-height: 4rem;
      margin-right: auto;
      /* font-size: 1.8rem; */
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
    centered: {
      type: Boolean,
      default: false
    },
    rolePropId: {
      type: String,
      default: ''
    },
    dropdownText: {
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
    },
    bold: {
      type: Boolean,
      default: false
    },
    showAll: {
      type: Boolean,
      default: true
    },
    roles: {
      type: Array,
      default: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const roles = this.roles !== null ? this.roles : this.getRoles();
      this.roleId = this.showAll ? '' : roles[0].id;
    });
  },
  data() {
    return {
      roleId: {
        type: String,
        default: ''
      },
      mobileDropdownDefault: {
        type: String
      }
    };
  },
  methods: {
    btnCSS(selected, density, isBold, isDark = false) {
      return [
        selected ? 'selected-filter-btn' : 'filter-btn',
        isDark ? 'fg-light' : 'fg-dark',
        density === 'compact' ? 'density-compact' : null,
        isBold ? 'bold' : null
      ];
    },
    selectorCSS(selected, isDark = false) {
      return selected
        ? ['selector', 'selected', isDark ? 'fg-light' : 'fg-dark']
        : ['selector'];
    },
    mobileSelectorCSS(centered, isDark = false) {
      return [isDark ? 'fg-light' : 'fg-dark', centered ? 'centered' : null];
    },
    mobileMenuCSS() {
      return ['fg-dark'];
    },
    handleMobileSelection(val) {
      this.roleId = val;
    }
  },
  watch: {
    roleId($event) {
      this.$emit('update:change', $event);
    }
  }
};
</script>
