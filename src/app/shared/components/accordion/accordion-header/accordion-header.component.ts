import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: 'resume-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionHeaderComponent {
  @HostBinding('class.opened')
  public isOpened = false;

  @Input()
  public header!: string;

  @Input()
  public subheader!: string;
}
