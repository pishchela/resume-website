import { SectionAdditionalData } from './sections/section-additional.model';
import { SectionItemsDescriptionData } from './sections/section-items-descritption.model';
import { SectionItemsData } from './sections/section-items.model';
import { SectionSkillsData } from './sections/section-skills.model';
import { SectionHeadingData } from './sections/section-heading.model';

export type SECTION_TYPE = SectionTypes;
export type SECTION_DATA_TYPE =
  SectionSkillsData | SectionHeadingData | SectionAdditionalData | SectionItemsData | SectionItemsDescriptionData | any;

export enum SectionTypes {
  SKILLS = 'skills',
  HEADING = 'heading',
  ADDITIONAL = 'additional',
  ITEMS = 'items',
  ITEMS_DESCRIPTION = 'items-description',
}

export interface Section {
  title: string;
  backgroundColor: string;
  color: string;
  type?: SECTION_TYPE;
  data?: SECTION_DATA_TYPE;
  sectionId?: string; // for nav;
}
