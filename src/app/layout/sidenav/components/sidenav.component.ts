import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { debounceTime, filter, fromEvent, Observable, Subscription, tap } from 'rxjs';

import { SidenavService } from '../services/sidenav.service';

export enum SideNavDirection {
    Left = 'left',
    Right = 'right'
}

const SCREEN_WIDTH_DESKTOP = 1024;

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
	],
})
export class SideNavComponent implements OnInit, OnDestroy {
	@Input()
	public sidenavTemplateRef: any;
	@Input()
	public duration: number = 0.25;
	@Input()
	public navWidth: number = window.innerWidth;
	@Input()
	public direction: SideNavDirection = SideNavDirection.Left;
	public showSideNav?: Observable<boolean>;
	private _resizeObservable$: Observable<Event> = fromEvent(window, 'resize');
	private _resizeSubscription$?: Subscription;
  
  constructor(private _sidenavService: SidenavService) {}

  public ngOnInit(): void {
	this.showSideNav = this._sidenavService.getIsOpenedObs();
	this._resizeSubscription$ = this._resizeObservable$
	.pipe(
		debounceTime(200),
		filter((event: Event | any) => event?.target?.innerWidth > SCREEN_WIDTH_DESKTOP),
		tap(() => this.close()),
		)
		.subscribe();
  }

  public ngOnDestroy(): void {
	this._resizeSubscription$?.unsubscribe();
  }

  public close(): void {
	this._sidenavService.setState(false);
  }

  public getSideNavBarStyle(showNav: boolean | null) {
	const navBarStyle: any = {};
	
	navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
	navBarStyle.width = this.navWidth + 'px';
	navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
	
	return navBarStyle;
  }
}