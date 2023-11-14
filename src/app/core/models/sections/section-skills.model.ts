export interface SectionSkillsData {
  skills: {
    key: string;
    flow: SkillsFlow;
    values: string[];
  }[]
}

export enum SkillsFlow {
  SINGLE = 'single',
  MULTIPLE = 'multiple'
}


export interface SkillsVM {
  key: string;
  flow: SkillsFlow;
  values?: string[];
  value?: string;
}
