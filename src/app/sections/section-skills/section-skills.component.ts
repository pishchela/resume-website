import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { debounceTime, fromEvent, Observable, Subscription, tap } from 'rxjs';

import { SectionSkillsData, SkillItem, SkillsFlow } from '../../core/models/sections/section-skills.model';
import { SectionsBase } from '../sections-base';

@Component({
	selector: 'resume-section-skills',
	templateUrl: 'section-skills.component.html',
	standalone: true,
	styleUrls: [
		'./section-skills.component.scss',
		'../sections-base.scss',
	],
	imports: [
		CommonModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSkillsComponent extends SectionsBase implements AfterViewInit, OnInit, OnDestroy {
  @ViewChildren('.skills__values__multiple__item') public items?: QueryList<ElementRef>;
  @Input()
  set data(data: SectionSkillsData){
	this.skills = data?.skills.map((item: SkillItem) => {
		const values = item.values.map((value: string, index: number) => index === item.values.length - 1 ? value : value + ',');
		return {
			...item,
			values: item.flow === SkillsFlow.MULTIPLE ? values : item.values,

		};
	});
	// console.warn(this.skills);
  }

  public skills?: SkillItem[];

  public sectionFlows = SkillsFlow;

  private _textElements: HTMLCollection | null = null;
  private _resizeObservable$: Observable<Event> = fromEvent(window, 'resize');
  private _resizeSubscription$?: Subscription;
  constructor(private _elementRef: ElementRef) {
	super();
  }

  public ngOnInit(): void {
	this._resizeSubscription$ = this._resizeObservable$
		.pipe(
			debounceTime(200),
			tap(() => this._applyClassToLastInRow()),
		)
		.subscribe();
  }

  public ngAfterViewInit(): void {
	this._textElements = this._elementRef.nativeElement?.getElementsByClassName('skills__values__multiple__item');
	this._applyClassToLastInRow();
  }

  public ngOnDestroy(): void {
	this._resizeSubscription$?.unsubscribe();
  }

  private _applyClassToLastInRow(): void {
	let previousTop: any = null;
	let itemsInRow: any[] = [];

	Array.prototype.slice.call(this._textElements)?.forEach((item: any) => {
		const itemTop = item.getBoundingClientRect().top;
		item?.classList?.remove('last-in-row');
		if (itemTop !== previousTop && itemsInRow.length > 0) {
			itemsInRow[itemsInRow.length - 1].classList.add('last-in-row');
			itemsInRow = [];
		}

		itemsInRow.push(item);
		previousTop = itemTop;
	});

	if (itemsInRow.length > 0) {
		itemsInRow[itemsInRow.length - 1].classList.add('last-in-row');
}
  }
}
