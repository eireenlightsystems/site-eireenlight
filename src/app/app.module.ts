import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {YaCoreModule, YamapngModule} from 'yamapng';

import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './shared/material-module';

import {ButtonWavesDirectiveDirective} from './shared/directives/button-waves-directive.directive';
import {BackgroundDarkDirectiveDirective} from './shared/directives/background-dark-directive.directive';
import {BackgroundLightdarkDirectiveDirective} from './shared/directives/background-lightdark-directive.directive';
import {BackgroundLightgreyDirectiveDirective} from './shared/directives/background-lightgrey-directive.directive';
import {ButtonMenuDirectiveDirective} from './shared/directives/button-menu-directive.directive';
import {ButtonTextlightDirectiveDirective} from './shared/directives/button-textlight-directive.directive';
import {ButtonTextdarkDirectiveDirective} from './shared/directives/button-textdark-directive.directive';
import {YellowWavesDirectiveDirective} from './shared/directives/yellow-waves-directive.directive';
import {BackgroundLightorangeDirectiveDirective} from './shared/directives/background-lightorange-directive.directive';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {CompanyLayoutComponent} from './shared/layouts/site-layout/company-layout/company-layout.component';
import {ClientLayoutComponent} from './shared/layouts/site-layout/client-layout/client-layout.component';
import {TopSheetComponent} from './shared/components/top-sheet/top-sheet.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HomeLayoutComponent} from './shared/layouts/site-layout/home-layout/home-layout.component';
import {ProductLayoutComponent} from './shared/layouts/site-layout/product-layout/product-layout.component';
import {FooterLayoutComponent} from './shared/layouts/site-layout/footer-layout/footer-layout.component';
import {AboutUsComponent} from './company/about-us/about-us.component';
import {ContactsComponent} from './company/contacts/contacts.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InvestorsComponent} from './company/investors/investors.component';
import {PersonCardComponent} from './shared/components/person-card/person-card.component';
import {TeamProjectLCSComponent} from './company/about-us/team-project-lcs/team-project-lcs.component';
import {ProjectLcsComponent} from './product/project-lcs/project-lcs.component';
import {TextFontweightDirectiveDirective} from './shared/directives/text-fontweight-directive.directive';
import {VideoPlayerComponent} from './shared/components/video-player/video-player.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  entryComponents: [TopSheetComponent],
  declarations: [
    ButtonWavesDirectiveDirective,

    BackgroundDarkDirectiveDirective,
    BackgroundLightdarkDirectiveDirective,
    BackgroundLightgreyDirectiveDirective,
    ButtonMenuDirectiveDirective,
    ButtonTextlightDirectiveDirective,
    ButtonTextdarkDirectiveDirective,
    YellowWavesDirectiveDirective,
    BackgroundLightorangeDirectiveDirective,
    TextFontweightDirectiveDirective,

    AppComponent,
    NotFoundComponent,
    SiteLayoutComponent,
    CompanyLayoutComponent,
    ClientLayoutComponent,
    TopSheetComponent,
    HomeLayoutComponent,
    ProductLayoutComponent,
    FooterLayoutComponent,
    AboutUsComponent,
    ContactsComponent,
    InvestorsComponent,
    PersonCardComponent,
    TeamProjectLCSComponent,
    ProjectLcsComponent,
    VideoPlayerComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    YamapngModule,
    YaCoreModule.forRoot({
      apiKey: '6acba81d-17f3-48a2-aef2-a2db9940aa7a'
    }),

    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCPrRNXqfuYEVYxnd8h3XL61gQnA2m-UkM'
    }),

    AppRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
