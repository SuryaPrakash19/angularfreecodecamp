import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CommentsService } from '../comments.service';
import { Comments } from '../comment';

export const commentsGuard: ResolveFn<Comments[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(CommentsService).getComments();
};
