import { Component, Input } from "@angular/core";
import { ComplexList } from "../../../../../core/models/resume.model";
import { CommonModule } from "@angular/common";

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
  complexList!: ComplexList[] | undefined;
}
