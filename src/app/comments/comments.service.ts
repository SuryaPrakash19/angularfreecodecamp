import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from './comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}
  getComments() {
    return this.http.get<Comments[]>(
      'https://jsonplaceholder.typicode.com/commentsaas'
    );
  }
}
