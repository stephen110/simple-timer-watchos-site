import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PageSection } from '../../../../models/page-section.model';
import { PageSectionsEnum } from '../../../../enums/page-section.enum';
import { PageSectionService } from '../../../../services/page-section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'stw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {
  _sections$: Observable<PageSection[]>;
  _activeSection: PageSectionsEnum | undefined;

  private subscriptions = new Subscription();

  constructor(
    private _pageSectionService: PageSectionService,
  ) {
    this._sections$ = this._pageSectionService.sections$();

    this.subscriptions.add(
      this._pageSectionService.activeSection$().subscribe(activeSection => {
        this._activeSection = activeSection?.id;
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
