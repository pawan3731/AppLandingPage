import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent }   from './index/index.component';
import { AppComponent }   from './app.component';
import { AboutComponent }   from './about/about.component';
import { FeaturesComponent }   from './features/features.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Features', component: FeaturesComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
