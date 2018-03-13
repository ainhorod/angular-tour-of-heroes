import { Component, OnInit } from '@angular/core';
import { Technology } from '../model/technology';
import { TECHNOLOGIES } from '../model/mock-technologies';
import { TechnologyService } from '../technology.service';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  selectedTechnology: Technology;

  techonologies: Technology[];


  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnologies();
    }

  onSelect(technology: Technology): void {
    this.selectedTechnology = technology;
  }
  getTechnologies(): void {
    this.technologyService.getTechnologies()
        .subscribe(techonologies => this.techonologies = techonologies);
  }
}