import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'resume-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  public isOpened = false;
}
