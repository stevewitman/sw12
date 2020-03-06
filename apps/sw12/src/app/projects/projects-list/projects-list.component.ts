import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Project } from '../../../../../../libs/core-data/src/lib/projects/project.model';

@Component({
  selector: 'bb-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
