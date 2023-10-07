import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';

const SMALL_FORM_BREAKPOINT = '(max-width: 799px)';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private _smallFormSubject$ = new BehaviorSubject<boolean>(false);

  constructor(
    private _breakPointObserver: BreakpointObserver,
  ) {
    const observer = this._breakPointObserver.observe([
      SMALL_FORM_BREAKPOINT,
    ]);

    observer.subscribe(result => {
      this._smallFormSubject$.next(result.breakpoints[SMALL_FORM_BREAKPOINT]);
    });
  }

  isSmallForm$(): Observable<boolean> {
    return this._smallFormSubject$.asObservable();
  }

  isSmallForm(): boolean {
    return this._smallFormSubject$.value;
  }
}
