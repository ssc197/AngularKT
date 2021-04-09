import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultComponent} from "./modules/pages/search-result/search-result.component"

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule),
    pathMatch : 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/pages/about/about.module').then(m => m.AboutModule),
    pathMatch : 'full'
  },
  {
    path: 'search',
    component: SearchResultComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
