import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialItem, SocialType } from '../../../core/models/resume.model';

// TODO: rename to subheader;
@Component({
	selector: 'resume-section-header',
	templateUrl: './section-header.component.html',
	styleUrls: ['../section-layout.component.scss'],
	imports: [
		CommonModule,
	],
	standalone: true,
})
export class SectionHeaderComponent {
	@Input()
	public header!: string;
	@Input()
	public socialItems!: SocialItem[];
	@Input()
	public imageUrl?: string;
	@Input()
	public imageWebPUrl?: string;
	public socialType = SocialType;
}
