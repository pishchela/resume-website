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

interface HeadingSection extends Section{
  header: string;
  description: string[];
}

interface ItemsSection extends Section{
  content: {
    header: string;
    subheader: string;
    description: {
      list?: string[];
      listItems: ListItem[]
    };
  }[]
}

// enum DescriptionType {
//   SINGLE_LIST = 'single-list',
//   LIST_WITH_HEADER = 'list-with-header',
// }
//
interface ListItem {
  list: string[];
  header: string;
}
