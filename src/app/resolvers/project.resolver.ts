import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProjectModel, ProjectService } from '../services/project.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectResolver implements Resolve<ProjectModel> {
  constructor(private projectsService: ProjectService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProjectModel> {
    const pro = this.projectsService.getProject(
      route.queryParamMap.get('id') ?? ''
    );
    return pro;
  }
}
