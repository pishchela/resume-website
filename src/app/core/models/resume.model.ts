export interface Resume {
  fullName: string;
  header: string;
  social: Array<{[key: string]: string }>;
  // TODO: add here links to sections;
  biography: {
    header: string;
    description: string[];
  };
  sections: Section[];
}

interface Section {
  name: string;
  items: SectionItem;
}

interface SectionItem {
  header: string;
  subheader: string;
  list: string[];
}
