import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  { path: 'profile', component: ProfileEditorComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
