import { Component } from '@angular/core';

import { SectionsBase } from '../sections-base';

@Component({
	selector: 'resume-section-container',
	templateUrl: './section-container.component.html',
	styleUrls: [
		'./section-container.component.scss',
		'../sections-base.scss',
	],
	standalone: true,
})
export class SectionContainerComponent extends SectionsBase{
}
