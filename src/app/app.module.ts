import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';

const routes: Routes = [
  {path:'', component:ViewBlogComponent},
  {path:'addblog', component: AddBlogComponent},
  {path:'editblog/:id', component: EditBlogComponent},
  {path:'deleteblog/:id', redirectTo: '', pathMatch: 'full'},
  {path:'showblog/:id', component: ShowBlogComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    ViewBlogComponent,
    EditBlogComponent,
    ShowBlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
