import { Component, OnDestroy, OnInit, Type } from '@angular/core';
import { Subscription } from 'rxjs';
import { Config } from 'src/app/model/config';
import { PortalOperateType } from 'src/app/model/portal-operate-message';
import { PortalService } from 'src/app/service/portal.service';
import { ExampleAComponent } from '../example-a/example-a.component';
import { ExampleBComponent } from '../example-b/example-b.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, OnDestroy {
  configs: Config[];
  private portalSubscription: Subscription;
  private id: number;
  constructor(private service: PortalService) { }

  ngOnInit() {
    this.configs = [];
    this.id = 0;
    this.reload();
    this.portalSubscription = this.service.operateSubject.subscribe(message => {
      switch (message.type) {
        case PortalOperateType.CREATE:
          this.create(message.config);
          break;
        case PortalOperateType.DELETE:
          this.delete(message.id);
          break;
        case PortalOperateType.UPDATE:
          this.update(message.id, message.config);
          break;
        case PortalOperateType.LOAD:
          this.reload();
          break;
        case PortalOperateType.SAVE:
          this.save();
          break;
        default:
          console.warn(`Unsupport message:${JSON.stringify(message)}`);
          break;
      }
    });
  }

  ngOnDestroy() {
    if (this.portalSubscription) {
      this.portalSubscription.unsubscribe();
    }
  }

  private create(config: Config): void {
    // this.flexibleOverlay.overlayRef.po
    // const nodeComponentRef = this.portal.overlayRef.attach(new NodeComponent());
    config.id = `${config.component.name}${this.id++}`;
    this.configs.push(config);
    console.log(`Create component, ID is:${config.id}`);
  }

  private delete(id: string): void {
    const deleteId = this.configs.findIndex(config => config.id === id);
    this.configs.splice(deleteId, 1);
    console.log(`Delete component, ID is:${id}`);
  }

  private update(id: string, config: Config): void {
    const updateConfig = this.configs.find(conf => conf.id === id);
    updateConfig.name = config.name;
    updateConfig.width = config.width;
    updateConfig.height = config.height;
    updateConfig.positionX = config.positionX;
    updateConfig.positionY = config.positionY;
    updateConfig.component = config.component;
    updateConfig.data = config.data;
    console.log(`Update component, ID is:${id}`);
  }

  private reload(): void {
    this.service.doLoad().subscribe(
      info => {
        info.layout.forEach(element => {
          const config: Config = {
            id: element.id,
            parent: element.parent,
            name: element.name,
            width: element.width,
            height: element.height,
            positionX: element.positionX,
            positionY: element.positionY,
            component: this.getComponent(element.component),
            data: element.data
          };
          this.create(config);
          console.log(`Load ${element.component} with ID:${element.id}`);
        });
        console.log('Data loaded!', info);
      },
      error => {
        console.warn('Load data failed!', error);
      }
    );
  }

  private save(): void {
    const data = {
      layout: this.configs
    };
    this.service.doSave(data).subscribe(response => {
      console.log(`Data saved:${JSON.stringify(data)}`);
    }, error => {
      // TODO: save data.
      console.log(`Data saved:${JSON.stringify(data)}`);
    });
  }

  private getComponent(componentString: string): Type<any> {
    switch (componentString) {
      case 'ExampleA':
        return ExampleAComponent;
      case 'ExampleB':
        return ExampleBComponent;
      default:
        console.warn(`Unsupport component:${componentString}`);
        return null;
    }
  }
}
