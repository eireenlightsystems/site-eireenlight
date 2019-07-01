import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {CompanyLayoutComponent} from './shared/layouts/site-layout/company-layout/company-layout.component';
import {ClientLayoutComponent} from './shared/layouts/site-layout/client-layout/client-layout.component';
import {HomeLayoutComponent} from './shared/layouts/site-layout/home-layout/home-layout.component';
import {ProductLayoutComponent} from './shared/layouts/site-layout/product-layout/product-layout.component';
import {AboutUsComponent} from './company/about-us/about-us.component';
import {ContactsComponent} from './company/contacts/contacts.component';
import {InvestorsComponent} from './company/investors/investors.component';

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {
        path: 'home', component: HomeLayoutComponent, children: []
      },
      {
        path: 'company', component: CompanyLayoutComponent, children: [
          {path: 'aboutUs', component: AboutUsComponent},
          {path: 'contacts', component: ContactsComponent},
          {path: 'investors', component: InvestorsComponent}
        ]
      },
      {
        path: 'product', component: ProductLayoutComponent, children: []
      },
      {
        path: 'client', component: ClientLayoutComponent, children: []
      },
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
