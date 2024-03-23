import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidenavService } from "../sidenav/services/sidenav.service";

@Component({
  selector: 'resume-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output()
  navClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  public fullName!: string;
  @Input()
  public nav!: string[];

  constructor(private _sidebarNav: SidenavService) {

  }

  public toggleSidebar(): void {
    this._sidebarNav.toggle();
  }
}
