export interface Resume {
  fullName: string;
  header: string;
  social?: Array<{ [key: string]: string }>;
  // TODO: add here links to sections;
  headingSection: HeadingSection;
  sections: ItemsSection[];
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
    description: string[];
  }[]
}
