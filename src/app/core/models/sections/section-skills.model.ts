export interface SectionSkillsData {
  skills: SkillItem[]
}

export interface SkillItem {
  key: string;
  flow: SkillsFlow;
  values: string[];
}

export enum SkillsFlow {
  SINGLE = 'single',
  MULTIPLE = 'multiple'
}
