import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'resume-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true,
})
export class AccordionBodyComponent {
  @Input()
  list!: string[] | undefined;
}
