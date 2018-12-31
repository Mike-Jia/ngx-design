import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/service/portal.service';
import { ExampleAComponent } from '../example-a/example-a.component';
import { ExampleBComponent } from '../example-b/example-b.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor(private portalService: PortalService) { }

  ngOnInit() {
  }

  createA(): void {
    this.portalService.create({
      name: 'title a', parent: 'portal', width: 200, height: 300, positionX: 0, positionY: 0, component: ExampleAComponent
    });
  }

  createB(): void {
    this.portalService.create({
      name: 'title b', parent: 'portal', width: 300, height: 200, positionX: 0, positionY: 0, component: ExampleBComponent
    });
  }

  load(): void {
    this.portalService.load();
  }

  save(): void {
    this.portalService.save();
  }
}
