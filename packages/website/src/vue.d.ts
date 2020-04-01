import { Company, Team, Role } from './types';

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    getCompanies(): Company[];
    getTeams(): Team[];
    getRoles(): Role[];
    $context: unknown;
    $static: unknown;
    $page: unknown;
  }
}
