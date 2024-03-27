import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialItem, SocialType } from '../../../core/models/resume.model';

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
  @Input()
  public fullName!: string;
  @Input()
  public header!: string;
  @Input()
  public socialItems!: SocialItem[];
  @Input()
  public imageUrl?: string;
  @Input()
  public imageWebPUrl?: string;
  public socialType = SocialType;
  public copyrightYear: number = new Date().getFullYear();
}
