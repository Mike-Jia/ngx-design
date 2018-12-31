import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TemplatesComponent } from './component/templates/templates.component';
import { PortalComponent } from './component/portal/portal.component';
import { NodeComponent } from './component/node/node.component';
import { ExampleAComponent } from './component/example-a/example-a.component';
import { ExampleBComponent } from './component/example-b/example-b.component';
import { HttpClientModule } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';
import { GroupComponent } from './component/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    PortalComponent,
    NodeComponent,
    ExampleAComponent,
    ExampleBComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ExampleAComponent, ExampleBComponent]
})
export class AppModule { }
