import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SocialItem, SocialType } from "../../../core/models/resume.model";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'resume-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: [
    './section-footer.component.scss',
    '../section-layout.component.scss',
  ],
  imports: [
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionFooterComponent {
  public socialType = SocialType;
  @Input()
  public fullName!: string;
  @Input()
  public header!: string;
  @Input()
  public socialItems!: SocialItem[];
  public copyrightYear: number = new Date().getFullYear();
}
