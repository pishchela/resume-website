// TODO: use then multiple files for it;
export interface Resume {
  fullName: string;
  header: string;
  socialItems: SocialItem[]
  // TODO: add here links to sections;
  nav: string[];
  headingSection: HeadingSection;
  sections: ItemsSection[];
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

interface Section {
  title: string;
  backgroundColor: string;
}

interface HeadingSection extends Section {
  header: string;
  description: string[];
}

interface ItemsSection extends Section {
  content: {
    header: string;
    subheader: string;
    description: ItemsSectionDescription;
  }[]
}

export interface ItemsSectionDescription {
  type: DescriptionType;
  list?: string[];
  complexList?: ComplexList[]
}

export enum DescriptionType {
  LIST = 'list',
  LIST_COMPLEX = 'list-complex',
}

export interface ComplexList {
  list: string[];
  header: string;
}
