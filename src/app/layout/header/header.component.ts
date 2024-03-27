import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { SidenavService } from '../sidenav/services/sidenav.service';

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
  public navClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  public fullName!: string;
  @Input()
  public nav!: string[];
  public showSideNav?: Observable<boolean>;

  constructor(private _sidebarNav: SidenavService) {

  }

  public ngOnInit(): void {
    this.showSideNav = this._sidebarNav.getIsOpenedObs();
  }

  public toggleSidebar(): void {
    this._sidebarNav.toggle();
  }
}
