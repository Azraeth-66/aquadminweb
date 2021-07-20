import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguaComponent } from './agua/agua.component';
import { MascotadataComponent } from './mascotadata/mascotadata.component';


const routes: Routes = [
  { path: '', component: AguaComponent },
  { path: 'mascotadata', component: MascotadataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
