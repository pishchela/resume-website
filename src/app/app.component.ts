import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Subscription } from "rxjs";

import { AccordionComponent } from "./shared/accordion/accordion.component";
import { HeaderComponent } from "./header/header.component";
import { AccordionHeaderComponent } from "./shared/accordion-header/accordion-header.component";
import { AccordionBodyComponent } from "./shared/accordion-body/accordion-body.component";
import { HeaderSectionComponent } from "./sections/header-section/header-section.component";
import { SectionContainerComponent } from "./sections/section-container/section-container.component";
import { DataService } from "./core/services/data.service";
import { Resume } from "./core/models/resume.model";

const accordionComponents = [
  AccordionComponent,
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
        requestAnimationFrame(() => {
          this._registerGSAP();
        });
      })
  }

  public ngOnDestroy() {
    this._dataSubscription.unsubscribe();
  }

  public scrollToSection(sectionName: string) {
    const position = this._getScrollPosition(sectionName);
    this._scroller.scrollToPosition([0 , position - 50]);
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

      console.warn(section);
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          // TODO: delete markers, and need to make header exact style size, maybe get there size from css;
          markers: true,
          pin: true,
          pinSpacing: false,
        }
      });
      //section2.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}
