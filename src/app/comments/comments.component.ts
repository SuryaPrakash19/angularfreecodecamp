import { Component, OnInit } from '@angular/core';
import { Comments } from './comment';
import { CommentsService } from './comments.service';
import { Observable, map, pluck } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(
    private commentsService: CommentsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => {
    //   this.comments$ = data['comments'];
    // });
  }
  comments$: any = this.activatedRoute.data.pipe(
    map((data) => data['comments'])
  );
}
