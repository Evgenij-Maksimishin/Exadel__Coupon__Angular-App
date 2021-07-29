import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {HomePageComponent} from './pages-components/home-page/home-page.component';
import {LoginPageComponent} from './pages-components/login-page/login-page.component';
import {DealPageComponent} from './pages-components/deal-page/deal-page.component';
import {UserProfilePageComponent} from './pages-components/user-profile-page/user-profile-page.component';
import {FavoritesPageComponent} from './pages-components/favorites-page/favorites-page.component';
import {OrderHistoryPageComponent} from './pages-components/order-history-page/order-history-page.component';
import {AuthGuard} from './guards/auth.guard';
import {VendorPageComponent} from './pages-components/vendor-page/vendor-page.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {AdminPageComponent} from './pages-components/admin-page/admin-page.component';
import {AdminDealsPageComponent} from './pages-components/admin-page/admin-deals-page/admin-deals-page.component';
import {AdminCategoriesPageComponent} from './pages-components/admin-page/admin-categories-page/admin-categories-page.component';
import {AdminStatisticsPageComponent} from './pages-components/admin-page/admin-statistics-page/admin-statistics-page.component';
import {AdminVendorsPageComponent} from './pages-components/admin-page/admin-vendors-page/admin-vendors-page.component';
import {ModeratorGuard} from './guards/moderator.guard';
import {AdminGuard} from './guards/admin.guard';
import {NotFoundPageComponent} from './pages-components/not-found-page/not-found-page.component';
import {SearchPageComponent} from './pages-components/search-page/search-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent, canActivate: [LoggedInGuard]},
  {path: '', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchPageComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: UserProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'favorites', component: FavoritesPageComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: OrderHistoryPageComponent, canActivate: [AuthGuard]},
  {path: 'deal/:id', component: DealPageComponent, canActivate: [AuthGuard]},
  {path: 'vendor/:id', component: VendorPageComponent, canActivate: [AuthGuard]},
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard, ModeratorGuard],
    children: [
      {
        path: 'deals',
        component: AdminDealsPageComponent,
        canActivate: [AuthGuard, ModeratorGuard],
      },
      {
        path: 'vendors',
        component: AdminVendorsPageComponent,
        canActivate: [AuthGuard, ModeratorGuard],
      },
      {
        path: 'categories',
        component: AdminCategoriesPageComponent,
        canActivate: [AuthGuard, ModeratorGuard],
      },
      {
        path: 'statistics',
        component: AdminStatisticsPageComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
    ],
  },
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
