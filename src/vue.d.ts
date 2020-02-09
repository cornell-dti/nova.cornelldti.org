import Strings from '@/strings/strings';

export interface Member {
  netid: string;
  image: string;
  name: string;
  firstName: string;
  lastName: string;
  isLead?: boolean;
  roleId: string;
  otherSubteams?: string[] | string | undefined;
  subteam: string;
  graduation: string;
  major: string;
  doubleMajor: string;
  minor: string;
  website: string;
  github: string;
  linkedin: string;
  hometown: string;
  about: string;
  roleDescription: string;
}

export interface Role {
  name: string;
  id: string;
}

export interface Team {
  name: string;
  id: string;
}

export interface Company {
  name: string;
  logo: string;
}

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    getCompanies(): Company[];
    getTeams(): Team[];
    getRoles(): Role[];
    getMembers(): Member[];
    Strings?: Strings;
    $context: unknown;
    $static: unknown;
    $page: unknown;
  }
}
