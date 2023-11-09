import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Subscription } from "rxjs";

import { HeaderComponent } from "./header/header.component";
import { AccordionHeaderComponent } from "./shared/components/accordion/accordion-header/accordion-header.component";
import { HeaderSectionComponent } from "./sections/header-section/header-section.component";
import { SectionContainerComponent } from "./sections/section-container/section-container.component";
import { DataService } from "./core/services/data.service";
import { Resume } from "./core/models/resume.model";
import { HTMLUtils } from "./shared/utils/html.utils";
import {
  AccordionContainerComponent
} from "./shared/components/accordion/accordion-container/accordion-container.component";
import { AccordionBodyComponent } from "./shared/components/accordion/accordion-body/accordion-body.component";

const accordionComponents = [
  AccordionContainerComponent,
  AccordionHeaderComponent,
  AccordionBodyComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeaderSectionComponent,
    SectionContainerComponent,
    accordionComponents,
  ],
  providers: [
    DataService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  /// TODO: https://angular.io/guide/prerendering
  public data!: Resume;

  private _dataSubscription!: Subscription;
  constructor(
    private _dataService: DataService,
    private _cdr: ChangeDetectorRef,
    private _scroller: ViewportScroller
  ) {
  }

  ngOnInit(): void {
    this._dataSubscription = this._dataService.getResumeData()
      .subscribe((res: Resume) => {
        this.data = res;
        console.warn(this.data);
        this._cdr.markForCheck();
        // requestAnimationFrame(() => {
        //   this._registerGSAP();
        // });
      })
  }

  public ngOnDestroy() {
    this._dataSubscription.unsubscribe();
  }

  public scrollToSection(sectionName: string) {
    const sectionPosition = this._getScrollPosition(sectionName);
    const headerHeight = HTMLUtils.getHeaderHeight();
    this._scroller.scrollToPosition([0 , sectionPosition - headerHeight]);
  }

  private _getScrollPosition(id: string) {
    const st = ScrollTrigger.create({ trigger: `#${id}`, pinnedContainer: '.pin-spacer', start: 'top top' })
    const stStart = st.start
    st.kill()
    return stStart;
  }

  private _registerGSAP(): void {
    // Register the ScrollTrigger with gsap
    gsap.registerPlugin(ScrollTrigger);

    //Loop over all the sections and set animations
    gsap.utils.toArray("section").forEach((section: any, index: number) => {

      // Give the backgrounds some random images
      // section.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

      // console.warn(section);
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          // TODO: delete markers;
          markers: true,
          pin: true,
          pinSpacing: false,
          // TODO: figure out here
          start: "center 45px",
          end: "max",
        }
      });
    });
  }
}
