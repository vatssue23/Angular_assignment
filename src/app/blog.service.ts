import { Blog } from './models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [];
  private blogUpdated = new Subject<Blog[]>();

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    })
  }
  getBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>('http://localhost:3000/blog/');
  }

  getBlogById(id: string): Observable<Blog[]> {
    return this.http.get<Blog[]>('http://localhost:3000/blog/' + id);
  }

  addBlog(title: string, categories: string, content: string): Observable<any> {
    console.log(title, categories, content);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const data = {
      title: title,
      categories: categories,
      content: content
    }
    return this.http.post('http://localhost:3000/blog/add', data);
  }

  editBlog(id: string, title: string, categories: string, content: string): Observable<any> {
    console.log(title, categories, content);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const data = {
      title: title,
      categories: categories,
      content: content
    }
    return this.http.post('http://localhost:3000/blog/edit/' + id , data);
  }

  deleteBlog(id: string): Observable<void> {
    console.log(id);
    return this.http.get<void>('http://localhost:3000/blog/delete/' + id);
  }

  upvote(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/blog/upvote/' + id, {responseType: 'text'});
  }

  downvote(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/blog/downvote/' + id, {responseType: 'text'});
  }
}
