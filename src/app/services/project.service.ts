import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface ProjectModel {
  id: string;
  name: string;
  owner: string;
}
const MOCK: ProjectModel[] = [
  { id: 'p1', name: 'Cosmic UI', owner: 'darshan' },
  { id: 'p2', name: 'Portfolio', owner: 'darshan' },
];
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}
  list(): Observable<ProjectModel[]> {
    return of(MOCK).pipe(delay(200));
  }

  getProject(id: string): Observable<ProjectModel> {
    const p = MOCK.find((prod) => prod.id === id)!;
    return of(p).pipe(delay(200));
  }
}
