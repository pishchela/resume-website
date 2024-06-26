import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexList } from '../../../../../core/models/sections/section-items-descritption.model';

@Component({
	standalone: true,
	selector: 'resume-accordion-list-complex',
	templateUrl: './accordion-body-list-complex.component.html',
	styleUrls: ['./accordion-body-list-complex.component.scss'],
	imports: [
		CommonModule,
	],
})
export class AccordionBodyListComplexComponent {
	@Input()
	public complexList!: ComplexList[] | undefined;
}
