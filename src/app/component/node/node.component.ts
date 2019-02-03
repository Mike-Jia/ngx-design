import { ComponentPortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { BaseNode } from 'src/app/model/base-node';
import { Config } from 'src/app/model/config';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements BaseNode, OnInit, AfterViewInit {
  @Input() config: Config;
  @Output() configChanged = new EventEmitter<Config>();
  @ViewChild('node') node: ElementRef;

  isFullScreen = false;
  isEditing = false;
  dynamicComponent: ComponentPortal<any>;

  constructor(private renderer: Renderer2, private portalService: PortalService) { }

  ngOnInit() {
    this.dynamicComponent = new ComponentPortal(this.config.component);
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.node.nativeElement, 'width', `${this.config.width}px`);
    this.renderer.setStyle(this.node.nativeElement, 'height', `${this.config.height}px`);
    this.renderer.setStyle(this.node.nativeElement, 'transform',
      `translate3d(${this.config.positionX}px,${this.config.positionY}px,0)`);
  }

  fullScreen(): void {
    this.node.nativeElement.requestFullscreen();
    this.isFullScreen = true;
    // document.onfullscreenchange(ev)
  }

  delete(): void {
    this.portalService.delete(this.config.id);
  }

  onMoved(event): void {
    const transform = event.source.element.nativeElement.style.transform;
    const position = this.getPosition(transform);
    this.config.positionX = position.x;
    this.config.positionY = position.y;
    // this.portalService.move(PortalOperateType.)
  }

  private getPosition(transform: string): { x: number, y: number } {
    const positionArray = transform.replace(/(translate3d\(|px\,+|px\)+)/g, '').split(' ');
    return {
      x: parseInt(positionArray[0], 0) + parseInt(positionArray[3], 0),
      y: parseInt(positionArray[1], 0) + parseInt(positionArray[4], 0)
    };
  }
}
