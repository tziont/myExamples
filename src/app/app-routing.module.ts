import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamleOneComponent } from './examle-one/examle-one.component';


const routes: Routes = [
  { path: 'example-one', component: ExamleOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
