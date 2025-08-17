import { Component, OnInit } from '@angular/core';
import { ProjectModel, ProjectService } from '../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectList: ProjectModel[] = [];
  constructor(private projectsService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projectsService.list().subscribe((res)=> {
      this.projectList = res;
    })
  }
  navigateToProject(id: string){
    this.router.navigate([`/projects`,id]);
  }
}
