import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SidenavService {
	private _isOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private _isOpenedObs$: Observable<boolean> = this._isOpened$.asObservable();

	public setState(showHide: boolean): void {
		this._isOpened$.next(showHide);
	}

	public toggle(): void {
		this._isOpened$.next(!this._isOpened$.value);
	}

	public isOpened(): boolean {
		return this._isOpened$.value;
	}

	public getIsOpenedObs(): Observable<boolean> {
		return this._isOpenedObs$;
	}
}