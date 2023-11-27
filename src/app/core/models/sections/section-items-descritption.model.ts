export interface SectionItemsDescriptionData {
  content: {
    header: string;
    subheader: string;
    complexList: ComplexList[];
  }[];
}

export interface ComplexList {
  list: string[];
  header: string;
}
