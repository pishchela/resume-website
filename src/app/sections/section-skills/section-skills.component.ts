import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SectionSkillsData, SkillsFlow, SkillsVM } from "../../core/models/sections/section-skills.model";
import { SectionsBase } from "../sections-base";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'resume-section-skills',
  templateUrl: 'section-skills.component.html',
  standalone: true,
  styleUrls: [
    './section-skills.component.scss',
    '../sections-base.scss'
  ],
  imports: [
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSkillsComponent extends SectionsBase{
  @Input()
  set data(data: SectionSkillsData){
    this.skills = data?.skills.map((item) => {
      let value;
      switch (item.flow) {
        case SkillsFlow.MULTIPLE:
          value = item.values?.join(', ');
          break;
        default:
          break;
      }
      return {
        value,
        ...item
      };
    });
    console.warn(this.skills);
  }

  public skills!: SkillsVM[];

  public sectionFlows = SkillsFlow;
}
