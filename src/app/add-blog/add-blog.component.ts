import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from './../models';
import { BlogService } from './../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  title = 'Add New Blog';
  blog: Blog | undefined;

  constructor(private blogservice: BlogService, private router: Router) { }

  AddBlog(form: NgForm){
    this.blogservice.addBlog(form.value['title'], form.value['categories'], form.value['content'])
    .subscribe(() => console.log('hello there'));
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
