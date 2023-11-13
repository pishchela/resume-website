import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: 'resume-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss'],
  standalone: true,
})
export class SectionContainerComponent {
  @Input()
  @HostBinding('style.background-color')
  backgroundColor!: string | undefined;
  @Input()
  @HostBinding('style.color')
  color!: string | undefined;
}
