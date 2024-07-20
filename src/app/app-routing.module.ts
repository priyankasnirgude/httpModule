import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostComponent } from './shared/components/post/post.component';

const routes: Routes = [
  {
    path : 'posts', component : PostDashboardComponent
  },
  {
    path : '', component : PostDashboardComponent
  },
  {
    path : 'addpost', component : PostFormComponent
  },
  {
    path : ':postId', component : PostComponent
  },
  {
    path : ':postId/edit', component : PostFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
