/* eslint-disable @typescript-eslint/no-unused-expressions */
import {Component, isDevMode, OnInit, ViewChild, Inject} from '@angular/core';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-admin-categories-page',
  templateUrl: './admin-categories-page.component.html',
  styleUrls: ['./admin-categories-page.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AdminCategoriesPageComponent implements OnInit {
  public categories: Array<any> = [];

  public category: any = {};

  public categoryDialog: boolean;

  public description?: string;

  public submitted: boolean;

  public tagsItems: Array<number> = [];

  public deleteHeaderLabel: string;

  public deleteConfirmLabel: string;

  public SummaryLabel: string;

  public deleteDetailLabel: string;

  public createdDetailLabel: string;

  public updatedDetailLabel: string;

  public errorCategorySummary: string;

  public errorCategoryDetail: string;

  public errorTagSummary: string;

  public errorTagDetail: string;

  public deleteHeaderTag: string;

  public deleteDetailTag: string;

  public error: string;

  @ViewChild('dt') dt: any;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private categoryService: CategoryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit() {
    this.changeLocalization();
    this.getCategories();
  }

  public changeLocalization(): void {
    this.translation.onChange().subscribe(() => {
      this.deleteHeaderLabel = this.translation.translate('admin.categoryPage.dialog.deleteHeader');
      this.deleteConfirmLabel = this.translation.translate(
        'admin.categoryPage.dialog.deleteConfirm',
      );
      this.SummaryLabel = this.translation.translate('admin.categoryPage.messageService.summary');
      this.deleteDetailLabel = this.translation.translate(
        'admin.categoryPage.messageService.deleteDetail',
      );
      this.createdDetailLabel = this.translation.translate(
        'admin.categoryPage.messageService.createdDetail',
      );
      this.updatedDetailLabel = this.translation.translate(
        'admin.categoryPage.messageService.updatedDetail',
      );
      this.errorCategorySummary = this.translation.translate(
        'admin.categoryPage.errorCategorySummary',
      );
      this.errorCategoryDetail = this.translation.translate(
        'admin.categoryPage.errorCategoryDetail',
      );
      this.errorTagSummary = this.translation.translate('admin.categoryPage.errorTagSummary');
      this.errorTagDetail = this.translation.translate('admin.categoryPage.errorTagDetail');
      this.deleteHeaderTag = this.translation.translate(
        'admin.categoryPage.dialog.deleteHeaderTag',
      );
      this.deleteDetailTag = this.translation.translate(
        'admin.categoryPage.messageService.deleteDetailTag',
      );
    });
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      if (data?.elements) {
        this.categories = data.elements;
        if (isDevMode()) console.log(data.elements);
      } else {
        console.error('Not data');
      }
    });
  }

  public saveCategory(): void {
    if (this.category.id) {
      this.messageService.add({
        severity: 'success',
        summary: this.SummaryLabel,
        detail: this.updatedDetailLabel,
        life: 3000,
      });
      // eslint-disable-next-line no-restricted-syntax
      for (let item of this.categories) {
        if (item.id === this.category.id) {
          item = {...this.category};
        }
      }
      if (isDevMode()) console.log(this.category);
      this.category.description = ' ';
      this.categoryService.updateCategory(this.category).subscribe(() => {
        this.getCategories();
      });
    } else {
      this.categoryService.addCategory(this.category).subscribe(() =>
        /* this.products.unshift(product), */
        this.getCategories(),
      );
      this.messageService.add({
        severity: 'success',
        summary: this.SummaryLabel,
        detail: this.createdDetailLabel,
        life: 3000,
      });
    }
    this.categoryDialog = false;
  }

  public openNew(): void {
    this.category = {
      tags: [],
    };
    this.submitted = false;
    this.categoryDialog = true;
  }

  public editCategory(category: any): void {
    this.category = {...category};
    this.categoryDialog = true;
  }

  public deleteCategory(category: any): void {
    this.confirmationService.confirm({
      message: `${this.deleteConfirmLabel}`,
      header: this.deleteHeaderLabel,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoryService.deleteCategory(category.id).subscribe(
          (response: any) => {
            if (isDevMode()) console.log(response);
            this.getCategories();
            this.messageService.add({
              severity: 'success',
              summary: this.SummaryLabel,
              detail: this.deleteDetailLabel,
              life: 3000,
            });
          },
          (error) => {
            // eslint-disable-next-line no-alert
            /* if (isDevMode()) console.log(error); */
            this.error = error;
            this.messageService.add({
              severity: 'error',
              summary: this.errorCategorySummary,
              detail: this.errorCategoryDetail,
              life: 3000,
            });
          },
        );
        /* this.category = {}; */
      },
    });
  }

  public deleteTagByIndex(index: number, item: any): void {
    this.confirmationService.confirm({
      message: `${this.deleteConfirmLabel}`,
      header: this.deleteHeaderTag,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoryService.deleteTag(item.tags[index].id).subscribe(
          (response: any) => {
            console.log(response);
            item.tags.splice(index, 1);
            this.messageService.add({
              severity: 'success',
              summary: this.SummaryLabel,
              detail: this.deleteDetailTag,
              life: 3000,
            });
          },
          (error: string) => {
            /* console.log(error); */
            this.error = error;
            this.messageService.add({
              severity: 'error',
              summary: this.errorTagSummary,
              detail: this.errorTagDetail,
              life: 3000,
            });
          },
        );
        /* item.tags.splice(index, 1); */
        /* this.category = {}; */
      },
    });
  }

  public hideDialog(): void {
    this.categoryDialog = false;
    this.submitted = false;
  }

  // eslint-disable-next-line class-methods-use-this
  public addAdditionalTag(item: any): void {
    item.tags.push({});
  }

  public applyFilterGlobal($event: any, stringVal: string): void {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
