import {
	ChangeDetectionStrategy, ChangeDetectorRef,
	Component, OnDestroy,
	OnInit,
} from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HeaderComponent } from './layout/header/header.component';
import { AccordionHeaderComponent } from './shared/components/accordion/accordion-header/accordion-header.component';
import { SectionContainerComponent } from './sections/section-container/section-container.component';
import { DataService } from './core/services/data.service';
import { Resume } from './core/models/resume.model';
import { HTMLUtils } from './shared/utils/html.utils';
import {
	AccordionContainerComponent,
} from './shared/components/accordion/accordion-container/accordion-container.component';
import { SectionFooterComponent } from './sections/section-layout/section-footer/section-footer.component';
import { SectionHeaderComponent } from './sections/section-layout/section-header/section-header.component';
import { SectionAdditionalComponent } from './sections/content/section-additional/section-additional.component';
import { SectionSkillsComponent } from './sections/section-skills/section-skills.component';
import {
	AccordionBodyListComponent,
} from './shared/components/accordion/accordion-body/accordion-body-list/accordion-body-list.component';
import {
	AccordionBodyListComplexComponent,
} from './shared/components/accordion/accordion-body/accordion-body-list-complex/accordion-body-list-complex.component';
import { Section, SectionTypes } from './core/models/section.model';
import { SideNavComponent } from './layout/sidenav/components/sidenav.component';
import { SidenavService } from './layout/sidenav/services/sidenav.service';

const accordionComponents = [
	AccordionContainerComponent,
	AccordionHeaderComponent,
	AccordionBodyListComponent,
	AccordionBodyListComplexComponent,
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
		SideNavComponent,
	],
	providers: [
		DataService,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
	public mainImageUrl = environment.mainImageUrl;
	public mainImageWebPUrl = environment.mainImageWebPUrl;
	public sectionType = SectionTypes;
	// TODO: https://angular.io/guide/prerendering
	// TODO: change builder to esbuild
	// TODO: crop image!;
	// TODO: adapt to lighthouse(chrome)
	public data!: Resume;

	private _dataSubscription!: Subscription;
	constructor(
    private _dataService: DataService,
    private _cdr: ChangeDetectorRef,
    private _scroller: ViewportScroller,
    private _sidenavService: SidenavService,
	) {
	}

	public ngOnInit(): void {
		this._dataSubscription = this._dataService.getResumeData()
			.subscribe((res: Resume) => {
				this.data = res;
				// console.warn(this.data);
				this._cdr.markForCheck();
			});
	}

	public ngOnDestroy() {
		this._dataSubscription.unsubscribe();
	}

	public getSectionId(section: Section): string {
		return section.sectionId ? section.sectionId : section.title;
	}

	public scrollToSection(sectionName: string) {
		this._sidenavService.setState(false);
		// const sectionPosition = this._scroller.getScrollPosition(sectionName);
		const headerHeight = HTMLUtils.getHeaderHeight();
		const sectionPosition = Number(document.getElementById(sectionName)?.offsetTop);
		this._scroller.scrollToPosition([0 , sectionPosition - headerHeight]);
	}
}
