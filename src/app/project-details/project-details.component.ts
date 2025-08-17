import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProjectModel } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project$: Observable<ProjectModel> = this.route.data.pipe(map(d=> d['project']));
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
