import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'resume-accordion',
  standalone: true,
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.scss'],
  imports: [
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionContainerComponent {
  public isOpened = false;
}
