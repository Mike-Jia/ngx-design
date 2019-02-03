import { Component, OnInit } from '@angular/core';
import { PortalService } from './service/portal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  productName = 'Smart Trader';
  isCollapsed = true;
  isReverseArrow = true;

  constructor(private portalService: PortalService) {
  }

  ngOnInit() {
  }

  load(solutionId: string): void {
    this.portalService.load(solutionId);
  }
}
