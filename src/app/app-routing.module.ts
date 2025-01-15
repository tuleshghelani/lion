import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { DealershipComponent } from './components/dealership/dealership.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { EssentialMaintenanceTipsComponent } from './components/blog_details/essential-maintenance-tips/essential-maintenance-tips.component';
import { BusinessStartupComponent } from './components/blog_details/business-startup/business-startup.component';
import { MarketTrendsComponent } from './components/blog_details/market-trends/market-trends.component';
import { EcoFriendlyExtractorsComponent } from './components/blog_details/eco-friendly-extractors/eco-friendly-extractors.component';
import { SafetyGuidelinesComponent } from './components/blog_details/safety-guidelines/safety-guidelines.component';
import { MaximizingJuiceYieldComponent } from './components/blog_details/maximizing-juice-yield/maximizing-juice-yield.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'dealership', component: DealershipComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: 'essential-maintenance-tips', component: EssentialMaintenanceTipsComponent },
  { path: 'business-startup', component: BusinessStartupComponent },
  { path: 'market-trends', component: MarketTrendsComponent },
  { path: 'eco-friendly-extractors', component: EcoFriendlyExtractorsComponent },
  { path: 'safety-guidelines', component: SafetyGuidelinesComponent },
  { path: 'maximizing-juice-yield', component: MaximizingJuiceYieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
