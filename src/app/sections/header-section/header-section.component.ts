import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SocialItem, SocialType } from "../../core/models/resume.model";

// TODO: rename to subheader;
@Component({
  selector: 'resume-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true,
})
export class HeaderSectionComponent {
  public socialType = SocialType;
  @Input()
  public header!: string;
  @Input()
  public socialItems!: SocialItem[];
}
