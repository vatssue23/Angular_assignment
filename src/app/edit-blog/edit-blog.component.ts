import { Component, OnInit } from '@angular/core';
import { Blog } from './../models'
import { BlogService } from './../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blog: Blog[] = [];
  id = this.route.snapshot.paramMap.get('id') || '';

  constructor(private blogservice: BlogService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.blogservice.getBlogById(this.id)
      .subscribe(blog => this.blog = blog);
  }

  EditBlog(form: NgForm) {
    console.log(form.value[' title'])
    this.blogservice.editBlog(this.id, form.value['title'], form.value['categories'], form.value['content'])
    .subscribe(() => console.log('hello there'));
    this.router.navigate(['']);
  }
}
