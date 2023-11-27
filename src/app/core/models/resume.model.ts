import { Section } from "./section.model";

export interface Resume {
  fullName: string;
  header: string;
  footer: string;
  socialItems: SocialItem[]
  // TODO: add here links to sections;
  nav: string[];
  sections: Section[];
}

export enum SocialType {
  EMAIL = 'email',
  PHONE = 'phone',
  LINK = 'link'
}

export interface SocialItem {
  type: SocialType;
  key: string;
  value: string;
}
