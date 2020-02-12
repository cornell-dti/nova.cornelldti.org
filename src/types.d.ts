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

export interface Project {
  active: boolean;
  id: string;
  teamId: string;
  card: string;
  name: string;
  features: { title: string; image: string; description: string };
  header: string;
  subheader: string;
  hero: {
    header: string;
    subheader: string;
    image?: string;
  };
  appstore?: string;
  playstore?: string;
  ios_github?: string;
  android_github?: string;
  heroStartingColor: string;
  heroEndingColor: string;
  heroUseDarkText: string;
}

export interface Company {
  name: string;
  logo: string;
}
