import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidenavService } from "../sidenav/services/sidenav.service";
import { Observable } from "rxjs";

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
export class HeaderComponent implements OnInit {
  @Output()
  navClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  public fullName!: string;
  @Input()
  public nav!: string[];
  public showSideNav?: Observable<boolean>;

  constructor(private _sidebarNav: SidenavService) {

  }

  ngOnInit(): void {
    this.showSideNav = this._sidebarNav.isOpenedObs$;
  }

  public toggleSidebar(): void {
    this._sidebarNav.toggle();
  }
}
