import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SectionSkillsData } from "../../core/models/sections/section-skills.model";

@Component({
  selector: 'resume-section-skills',
  templateUrl: 'section-skills.component.html',
  standalone: true,
  styleUrls: ['./section-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSkillsComponent {
  @Input()
  data!: SectionSkillsData;
}
