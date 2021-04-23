import { Component, OnInit } from '@angular/core';
import { Blog } from './../models'
import { BlogService } from './../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  blog: Blog[] = [];
  id = this.route.snapshot.paramMap.get('id') || '';

  constructor(private blogservice: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.blogservice.getBlogById(this.id).subscribe(blog => this.blog = blog);
  }

  onDelete() {
    this.blogservice.deleteBlog(this.id).subscribe(() => console.log('deleted'));
    this.router.navigate(['']);
  }

  onUpVote() {
    this.blogservice.upvote(this.id).subscribe(() => console.log(' upvoted'));
    this.blog[0].upVotes = this.blog[0].upVotes + 1;
  }

  onDownVote() {
    this.blogservice.downvote(this.id).subscribe(() => console.log(' upvoted'));
    this.blog[0].downVotes = this.blog[0].downVotes + 1;
  }
}
