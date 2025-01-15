import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { DealershipComponent } from './components/dealership/dealership.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarComponent } from './components/shared/snackbar/snackbar.component';
import { CountryService } from './services/country.service';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { EssentialMaintenanceTipsComponent } from './components/blog_details/essential-maintenance-tips/essential-maintenance-tips.component';
import { BusinessStartupComponent } from './components/blog_details/business-startup/business-startup.component';
import { MarketTrendsComponent } from './components/blog_details/market-trends/market-trends.component';
import { EcoFriendlyExtractorsComponent } from './components/blog_details/eco-friendly-extractors/eco-friendly-extractors.component';
import { SafetyGuidelinesComponent } from './components/blog_details/safety-guidelines/safety-guidelines.component';
import { MaximizingJuiceYieldComponent } from './components/blog_details/maximizing-juice-yield/maximizing-juice-yield.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProductsComponent,
    DealershipComponent,
    ContactComponent,
    SnackbarComponent,
    BlogListComponent,
    EssentialMaintenanceTipsComponent,
    BusinessStartupComponent,
    MarketTrendsComponent,
    EcoFriendlyExtractorsComponent,
    SafetyGuidelinesComponent,
    MaximizingJuiceYieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
