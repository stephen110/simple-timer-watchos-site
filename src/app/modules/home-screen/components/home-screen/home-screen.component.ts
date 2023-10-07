import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveSectionState, PageSectionService } from '../../../../services/page-section.service';
import { PageSectionsEnum } from '../../../../enums/page-section.enum';
import { BannerComponent } from '../banner/banner.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { SupportComponent } from '../support/support.component';
import { ScreenSizeService } from '../../../../services/screen-size.service';

@Component({
  selector: 'stw-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnDestroy, AfterViewInit {
  @ViewChild('content') contentElement!: ElementRef;
  @ViewChild(BannerComponent, { read: ElementRef }) bannerComponent!: ElementRef;
  @ViewChild(InstructionsComponent, { read: ElementRef }) aboutComponent!: ElementRef;
  @ViewChild(SupportComponent, { read: ElementRef }) contactComponent!: ElementRef;

  private subscriptions = new Subscription();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _screenSizeService: ScreenSizeService,
    private _pageSectionService: PageSectionService,
  ) {
    this.subscriptions.add(
      this._route.paramMap.subscribe(() => this.handleRoute()),
    );
  }

  ngAfterViewInit() {
    this.subscriptions.add(
      this._pageSectionService.activeSection$().subscribe(state => this.handleActiveSection(state)),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleRoute() {
    const section = this._route.snapshot.paramMap.get('section');
    const matchedSection = this._pageSectionService.sections().find(s => s.id === section?.toLowerCase());
    this._pageSectionService.setActive(matchedSection?.id, true);
  }

  handleActiveSection(state: ActiveSectionState) {
    if (state.fromClick === false) {
      return;
    }

    let scrollElement: HTMLElement | undefined;

    switch (state.id) {
      case PageSectionsEnum.Home:
        scrollElement = this.bannerComponent.nativeElement;
        break;
      case PageSectionsEnum.About:
        scrollElement = this.aboutComponent.nativeElement;
        break;
      case PageSectionsEnum.Contact:
        scrollElement = this.contactComponent.nativeElement;
        break;
    }

    if (scrollElement) {
      scrollElement.scrollIntoView();
    }
  }

  getSections() {
    const sections = this._pageSectionService.sections();

    return [
      {
        ...sections.find(s => s.id === PageSectionsEnum.Home),
        element: this.bannerComponent.nativeElement
      },
      {
        ...sections.find(s => s.id === PageSectionsEnum.About),
        element: this.aboutComponent.nativeElement
      },
      {
        ...sections.find(s => s.id === PageSectionsEnum.Contact),
        element: this.contactComponent.nativeElement
      }
    ];
  }

  async handleScroll(event: Event) {
    const currentTarget = event.target as HTMLElement;
    const contentRect = this.contentElement.nativeElement.getBoundingClientRect();

    const visibility = this.getSections().map(({ element, ...rest }) => {
      const elementRect = element.getBoundingClientRect();
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + elementRect.height;

      const contentTop = currentTarget.scrollTop;
      const contentBottom = contentTop + contentRect.height;

      const top = Math.max(elementTop, contentTop);
      const bottom = Math.min(elementBottom, contentBottom);

      return {
        visibility: Math.max(0, bottom - top) /  elementRect.height,
        ...rest,
      };
    });

    const mostVisible = visibility.reverse().sort((a, b) => b.visibility - a.visibility)[0];
    this._pageSectionService.setActive(mostVisible.id, false);
    await this._router.navigateByUrl(mostVisible.link!, { skipLocationChange: true });
  }
}
