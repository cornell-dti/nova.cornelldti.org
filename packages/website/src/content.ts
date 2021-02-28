export interface Content {
  textHero: { header: string; subheader: string };
  hero: {
    header?: string;
    subheader?: string;
    lazy: string;
    video: {
      mp4: string;
      webm: string;
    };
    image: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AlumniContent extends Content {}

export interface HomeContent extends Content {
  quicklinks: {
    team: {
      header: string;
      subheader: string;
      link: string;
      image: string;
    };

    projects: {
      header: string;
      subheader: string;
      link: string;
      image: string;
    };

    initiatives: {
      header: string;
      subheader: string;
      link: string;
      image: string;
    };
  };
}

export interface CoursesContent extends Content {
  content: {
    id: string;
    header: string;
    subtitle: string;
    description: string;
    image: string;
    buttons: {
      apply: {
        title: string;
        link: string;
      };
      github: {
        title: string;
        link: string;
      };
    };
    // 3 "sub descriptions" in a pair: first element is title and second is the desc
    subDescription1: [string, string];
    subDescription2: [string, string];
    subDescription3: [string, string];
    courseWebsiteLink: string;
  }[];
}

export interface InitiativesContent extends Content {
  promo: {
    blueprint: string;
    halfbaked: string;
    makeathon: string;
  };
}

export type ProjectsContent = Content;

export type SponsorTier = 'bronze' | 'gold' | 'silver' | 'platinum';

export interface SponsorTierBenefits {
  benefit: string;
  subheader: string;
  tiers: { [key in SponsorTier]?: boolean };
}

export interface SponsorContent extends Content {
  pitch: {
    header: string;
    description: string;
  }[];

  callToAction: {
    description: string;
    button: {
      text: string;
      link?: string;
    };
  };
  currentSponsors: {
    header: string;
  };
  tiers: {
    header: string;
    sponsor: SponsorTierBenefits[];
  };
  sponsors: {
    check: string;
    invision: string;
    google: string;
    cornellEngineeringAlumni: string;
    capitalone: string;
    zeplin: string;
    asana: string;
  };
  events: {
    infoSesh: string;
    googleLunch: string;
  };
}

export interface TeamContent extends Content {
  team: {
    header: string;
    away: {
      header: string;
      subheader: string;
    };
  };
  diversity: {
    header: string;
    description: string;

    gender: {
      header: string;
    };
    stats: {
      underclassmen: {
        stat: string;
        description: string;
      };
      majors: {
        stat: string;
        description: string;
      };
      colleges: {
        stat: string;
        description: string;
      };
    };
  };
}

export interface ApplicationInfo {
  id: string;
  apply: Apply;
  nextSteps: Apply;
  decision: Apply;
}

export interface Apply {
  header: string;
  rightHeader: string;
  sections: Section[];
  callToActionButton?: CallToActionButton;
}

export interface CallToActionButton {
  closed: boolean;
  link: string;
  content: string;
}

export interface Section {
  header: string;
  content: string;
}

export interface Closed {
  header: string;
  subheader: string;
}

export interface PurpleInfoSession {
  header: string;
  subheader: string;
  description: string;
}

export interface InfoSessionElement {
  time: string;
  location: string;
  link: Link;
}

export interface Link {
  url: string;
  text: string;
}

export interface JoinInformation {
  applicationsOpen: boolean;
}

export interface MainMenu {
  advertisement: Advertisement;
}

export interface Advertisement {
  open: boolean;
}

export interface PrivacyPolicy {
  id: string;
  name: string;
  content: string;
}

export interface ApplyContent extends Content {
  hero: {
    header: string;
    subheader: string;
    closed: Closed;
    lazy: string;
    video: { mp4: string; webm: string };
    image: string;
  };
  joinInformation: JoinInformation;
  mainMenu: MainMenu;
  infoSession: PurpleInfoSession;
  infoSessions: InfoSessionElement[];
  applicationInfo: ApplicationInfo[];
}
