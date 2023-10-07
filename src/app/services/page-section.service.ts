import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageSectionsEnum } from '../enums/page-section.enum';
import { PageSection } from '../models/page-section.model';

export interface ActiveSectionState {
  id?: PageSectionsEnum;
  fromClick?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PageSectionService {
  private _activeSectionSubject = new BehaviorSubject<ActiveSectionState>({ id: PageSectionsEnum.Home });
  private _sectionSubject = new BehaviorSubject<PageSection[]>([]);

  constructor() {
    this._sectionSubject.next([
      {
        id: PageSectionsEnum.Home,
        link: '/home',
        title: 'Home',
      },
      {
        id: PageSectionsEnum.About,
        link: '/about',
        title: 'About',
      },
      {
        id: PageSectionsEnum.Contact,
        link: '/contact',
        title: 'Contact',
      },
    ]);
  }

  activeSection$(): Observable<ActiveSectionState> {
    return this._activeSectionSubject.asObservable();
  }

  activeSection(): ActiveSectionState {
    return this._activeSectionSubject.value;
  }

  sections$(): Observable<PageSection[]> {
    return this._sectionSubject.asObservable();
  }

  sections(): PageSection[] {
    return this._sectionSubject.value;
  }

  setActive(id?: PageSectionsEnum, fromClick: boolean = false) {
    if (this.activeSection()?.id !== id) {
      this._activeSectionSubject.next({
        id,
        fromClick,
      });
    }
  }
}
