import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AccordionBodyListComponent } from "./accordion-body-list/accordion-body-list.component";
import { DescriptionType, ItemsSectionDescription } from "../../../../core/models/resume.model";
import { CommonModule } from "@angular/common";
import { AccordionBodyListComplexComponent } from "./accordion-body-list-complex/accordion-body-list-complex.component";

@Component({
  standalone: true,
  selector: 'resume-accordion-body',
  templateUrl: './accordion-body.component.html',
  imports: [
    CommonModule,
    AccordionBodyListComponent,
    AccordionBodyListComplexComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionBodyComponent {
  @Input()
  description!: ItemsSectionDescription;
  public descriptionTypes = DescriptionType;
}
