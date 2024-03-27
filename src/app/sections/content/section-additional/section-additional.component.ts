import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	selector: 'resume-section-additional',
	templateUrl: './section-additional.component.html',
	styleUrls: ['./section-additional.component.scss'],
	imports: [
		CommonModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionAdditionalComponent {
  @Input()
  public items!: string[];
}
