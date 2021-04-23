import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Blog } from './../models'
import { BlogService } from './../blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  blog: Blog[] = [];

  constructor(private blogservice: BlogService) { }

  ngOnInit(): void {
    this.blogservice.getBlog()
    .subscribe(blog => this.blog = blog);
  }
}
