import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {DividerModule} from 'primeng/divider';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {GalleriaModule} from 'primeng/galleria';
import {MenuModule} from 'primeng/menu';
import {ChipModule} from 'primeng/chip';
import {TagModule} from 'primeng/tag';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {AvatarModule} from 'primeng/avatar';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CountdownModule} from 'ngx-countdown';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {ConfirmationService, MessageService} from 'primeng/api';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {GMapModule} from 'primeng/gmap';
import {L10nLoader, L10nTranslationModule, L10nIntlModule} from 'angular-l10n';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {NgxChartsModule} from 'node_modules/@swimlane/ngx-charts';
import {DatePipe} from '@angular/common';
import {TooltipModule} from 'primeng/tooltip';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {RippleModule} from 'primeng/ripple';
import {l10nConfig, initL10n} from './l10n-config';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './pages-components/home-page/home-page.component';
import {LoginPageComponent} from './pages-components/login-page/login-page.component';
import {DealCardComponent} from './components/deal-card/deal-card.component';
import {DealGalleryComponent} from './components/deal-gallery/deal-gallery.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {DealPageComponent} from './pages-components/deal-page/deal-page.component';
import {VendorPageComponent} from './pages-components/vendor-page/vendor-page.component';
import {UserProfilePageComponent} from './pages-components/user-profile-page/user-profile-page.component';
import {FavoritesPageComponent} from './pages-components/favorites-page/favorites-page.component';
import {OrderHistoryPageComponent} from './pages-components/order-history-page/order-history-page.component';
import {AuthGuard} from './guards/auth.guard';
import {AUTH_PROVIDERS} from './services/auth.service';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {LoggedInGuard} from './guards/logged-in.guard';
import {FilterMenuComponent} from './components/filter-menu/filter-menu.component';
import {SortingDropdownComponent} from './components/sorting-dropdown/sorting-dropdown.component';
import {AdminPageComponent} from './pages-components/admin-page/admin-page.component';
import {AdminDealsPageComponent} from './pages-components/admin-page/admin-deals-page/admin-deals-page.component';
import {AdminVendorsPageComponent} from './pages-components/admin-page/admin-vendors-page/admin-vendors-page.component';
import {AdminCategoriesPageComponent} from './pages-components/admin-page/admin-categories-page/admin-categories-page.component';
import {AdminStatisticsPageComponent} from './pages-components/admin-page/admin-statistics-page/admin-statistics-page.component';
import {AdminGuard} from './guards/admin.guard';
import {ModeratorGuard} from './guards/moderator.guard';
import {NotFoundPageComponent} from './pages-components/not-found-page/not-found-page.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {SearchPageComponent} from './pages-components/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    DealCardComponent,
    DealGalleryComponent,
    HeaderComponent,
    FooterComponent,
    DealPageComponent,
    VendorPageComponent,
    UserProfilePageComponent,
    FavoritesPageComponent,
    OrderHistoryPageComponent,
    FilterMenuComponent,
    SortingDropdownComponent,
    AdminPageComponent,
    AdminDealsPageComponent,
    AdminVendorsPageComponent,
    AdminCategoriesPageComponent,
    AdminStatisticsPageComponent,
    NotFoundPageComponent,
    SearchBarComponent,
    SearchPageComponent,
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    AppRoutingModule,
    L10nTranslationModule.forRoot(l10nConfig),
    L10nIntlModule,
    FormsModule,
    HttpClientModule,
    DividerModule,
    ListboxModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    BrowserAnimationsModule,
    CountdownModule,
    TabViewModule,
    ReactiveFormsModule,
    AccordionModule,
    GalleriaModule,
    MenuModule,
    CardModule,
    AvatarModule,
    TableModule,
    MultiSelectModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    CalendarModule,
    DialogModule,
    ChipModule,
    TagModule,
    GMapModule,
    ProgressSpinnerModule,
    NgxChartsModule,
    TooltipModule,
    RippleModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true,
    },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AUTH_PROVIDERS,
    AuthGuard,
    LoggedInGuard,
    ConfirmationService,
    MessageService,
    AdminGuard,
    ModeratorGuard,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
