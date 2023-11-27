import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Subscription } from "rxjs";

import { HeaderComponent } from "./layout/header/header.component";
import { AccordionHeaderComponent } from "./shared/components/accordion/accordion-header/accordion-header.component";
import { SectionContainerComponent } from "./sections/section-container/section-container.component";
import { DataService } from "./core/services/data.service";
import { Resume } from "./core/models/resume.model";
import { HTMLUtils } from "./shared/utils/html.utils";
import {
  AccordionContainerComponent
} from "./shared/components/accordion/accordion-container/accordion-container.component";
import { SectionFooterComponent } from "./sections/section-layout/section-footer/section-footer.component";
import { SectionHeaderComponent } from "./sections/section-layout/section-header/section-header.component";
import { SectionAdditionalComponent } from "./sections/content/section-additional/section-additional.component";
import { SectionSkillsComponent } from "./sections/section-skills/section-skills.component";
import {
  AccordionBodyListComponent
} from "./shared/components/accordion/accordion-body/accordion-body-list/accordion-body-list.component";
import {
  AccordionBodyListComplexComponent
} from "./shared/components/accordion/accordion-body/accordion-body-list-complex/accordion-body-list-complex.component";
import { SectionTypes } from "./core/models/section.model";

const accordionComponents = [
  AccordionContainerComponent,
  AccordionHeaderComponent,
  AccordionBodyListComponent,
  AccordionBodyListComplexComponent
];

const sectionComponents = [
  SectionHeaderComponent,
  SectionContainerComponent,
  SectionFooterComponent,
  SectionAdditionalComponent,
  SectionSkillsComponent,
];

// https://sites.google.com/view/vladislav-paley-cv/home

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    accordionComponents,
    sectionComponents,
  ],
  providers: [
    DataService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public sectionType = SectionTypes;
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

  // https://gsap.com/community/forums/topic/35927-jumpy-text-and-scrolltrigger-markers-with-pin-in-scroller/
  private _registerGSAP(): void {
    const headerHeight = HTMLUtils.getHeaderHeight();
    // Register the ScrollTrigger with gsap
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll({target: ".resume", allowNestedScroll: true});

    //Loop over all the sections and set animations
    gsap.utils.toArray("section").forEach((section: any, index: number) => {

      // Give the backgrounds some random images
      // section.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        markers : true,
        scroller:".resume",
      });
      // console.warn(section);
      // gsap.to(section, {
      //   scrollTrigger: {
      //     trigger: section,
      //     // TODO: delete markers;
      //     markers: true,
      //     pin: true,
      //     pinSpacing: false,
      //     scroller: '.resume',
      //     // TODO: figure out here
      //     // start: `center ${headerHeight}px`,
      //     // start: `-45px`,
      //     start: "top top",
      //     // end: 'max',
      //   }
      // });
    });
    ScrollTrigger.create({
      snap: 1 / 4
    });
  }
























}
