import { Component, HostListener, Input, OnDestroy, OnInit } from "@angular/core";
import { debounceTime, filter, fromEvent, Observable, of, Subscription, tap } from "rxjs";
import { SidenavService } from "../services/sidenav.service";
import { CommonModule } from "@angular/common";

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
    ]
})
export class SideNavComponent implements OnInit, OnDestroy {
  public showSideNav: Observable<boolean> = of(false);
  private _resizeObservable$: Observable<Event> = fromEvent(window, 'resize');
  private _resizeSubscription$?: Subscription;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;
  
  constructor(private _sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.showSideNav = this._sidenavService.isOpenedObs$;
    this._resizeSubscription$ = this._resizeObservable$
    .pipe(
      debounceTime(200),
      filter((event: Event | any) => event?.target?.innerWidth > SCREEN_WIDTH_DESKTOP),
      tap(() => this.close())
    )
    .subscribe();
  }

  ngOnDestroy() {
    this._resizeSubscription$?.unsubscribe()
}

  close() {
    this._sidenavService.setState(false);
  }

  getSideNavBarStyle(showNav: boolean | null) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }
}