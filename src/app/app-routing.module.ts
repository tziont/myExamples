import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleOneComponent } from './components/example-one/example-one.component';
import { ExampleTwoComponent } from './components/example-two/example-two.component';


const routes: Routes = [
  { path: 'example-one', component: ExampleOneComponent },
  { path: 'example-two', component: ExampleTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
