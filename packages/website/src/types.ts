/* eslint-disable camelcase */

export interface Member {
  netid: string;
  name: string;
  firstName: string;
  lastName: string;
  isLead?: boolean;
  roleId: string;
  otherSubteams?: string[] | string | undefined;
  subteam?: string;
  graduation: string;
  major: string;
  doubleMajor?: string;
  minor?: string;
  website?: string;
  github?: string;
  linkedin?: string;
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

export interface Project {
  active?: boolean;
  teamId: string;
  card: string;
  name: string;
  features: readonly { title: string; image?: string; description: string }[];
  header: string;
  subheader: string;
  hero: {
    header: string;
    subheader: string;
    image?: string;
  };
  website?: string;
  website_title?: string;
  appstore?: string;
  playstore?: string;
  github?: string;
  ios_github?: string;
  android_github?: string;
  heroStartingColor: string;
  heroEndingColor: string;
  heroUseDarkText: boolean;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Assets {
  readonly branding: {
    readonly wordmark: string;
    readonly icon: string;
  },
  readonly mainMenu: {
    readonly advertisement: { readonly open: boolean },
    readonly giving: {
      readonly show: boolean;
      readonly text: string;
    }
  },
  readonly footer: { readonly link: string }
}
