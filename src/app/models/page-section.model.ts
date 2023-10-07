import { PageSectionsEnum } from '../enums/page-section.enum';

export interface PageSection {
  id: PageSectionsEnum;
  link: string;
  title: string;
}
