import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'resume-accordion-body-list',
  templateUrl: './accordion-body-list.component.html',
  styleUrls: ['./accordion-body-list.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true,
})
export class AccordionBodyListComponent {
  @Input()
  list!: string[] | undefined;
}
