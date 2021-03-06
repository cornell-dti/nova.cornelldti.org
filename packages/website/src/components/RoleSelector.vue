<template>
  <div>
    <b-row class="filter-btn-group desktop-selector-container">
      <b-col
        cols="auto"
        v-if="showAll"
        :md="density == 'compact' ? 'auto' : null"
        class="my-auto text-center"
      >
        <div :class="btnCSS(roleId === '', density, bold, dark)" @click="roleId = ''">All</div>
        <div :class="selectorCSS(roleId === '', dark)" />
      </b-col>
      <b-col
        v-for="role of resolvedRoles"
        :md="density === 'compact' ? 'auto' : null"
        :key="role.id"
        class="text-center"
      >
        <div :class="btnCSS(roleId === role.id, density, bold, dark)" @click="roleId = role.id">
          {{ role.name }}
        </div>
        <div :class="selectorCSS(roleId === role.id, dark)" />
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
            v-for="role of resolvedRoles"
            :key="role.id"
            :value="role.id"
            >{{ role.name }}</option
          >
        </b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
.filter-btn-group {
  justify-content: space-evenly;
}

.filter-btn,
.selected-filter-btn {
  margin: 1rem 0 0;
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

@media screen and (max-width: 1076px) {
  .desktop-selector-container {
    display: none !important;
  }

  .mobile-selector-container {
    display: flex;
    font-weight: bold;

    #mobile-apply-dropdown {
      background-color: transparent;

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

      -webkit-box-shadow: none;
      box-shadow: none;
      font-weight: bold;
      padding: 0.5rem 0.5rem;
      width: auto;
      text-decoration: underline;
      font-size: 2rem;
      min-height: 4rem;
      margin-right: auto;
      padding-right: 1.5rem;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';

import { Role } from '../types';

export default Vue.extend({
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
    } as PropValidator<Role[]>
  },
  computed: {
    resolvedRoles(): readonly Role[] {
      return this.roles ?? this.getRoles();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.roleId = this.showAll ? '' : this.resolvedRoles?.[0].id ?? '';
    });
  },
  data() {
    return {
      roleId: '',
      mobileDropdownDefault: {
        type: String
      }
    };
  },
  methods: {
    btnCSS(
      selected: boolean,
      density: 'compact' | '',
      isBold: boolean,
      isDark = false
    ): readonly (string | null)[] {
      return [
        selected ? 'selected-filter-btn' : 'filter-btn',
        isDark ? 'fg-light' : 'fg-dark',
        density === 'compact' ? 'density-compact' : null,
        isBold ? 'bold' : null
      ];
    },
    selectorCSS(selected: boolean, isDark = false): readonly string[] {
      return selected ? ['selector', 'selected', isDark ? 'fg-light' : 'fg-dark'] : ['selector'];
    },
    mobileSelectorCSS(centered: boolean, isDark = false): readonly (string | null)[] {
      return [isDark ? 'fg-light' : 'fg-dark', centered ? 'centered' : null];
    },
    mobileMenuCSS(): readonly string[] {
      return ['fg-dark'];
    },
    handleMobileSelection(val: string): void {
      this.roleId = val;
    }
  },
  watch: {
    roleId($event: Event): void {
      this.$emit('update:change', $event);
    }
  }
});
</script>
