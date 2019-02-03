import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { ExampleAComponent } from './component/example-a/example-a.component';
import { ExampleBComponent } from './component/example-b/example-b.component';
import { GroupComponent } from './component/group/group.component';
import { NodeComponent } from './component/node/node.component';
import { PortalComponent } from './component/portal/portal.component';
import { MarketChartComponent } from './component/templates/market-chart/market-chart.component';
import { MarketDepthComponent } from './component/templates/market-depth/market-depth.component';
import { MarketMarketComponent } from './component/templates/market-market/market-market.component';
import { MarketTradeComponent } from './component/templates/market-trade/market-trade.component';
import { TradeOrderListComponent } from './component/templates/trade-order-list/trade-order-list.component';
import { TradeOrderComponent } from './component/templates/trade-order/trade-order.component';
import { TradePositionListComponent } from './component/templates/trade-position-list/trade-position-list.component';
import { TradeTradeListComponent } from './component/templates/trade-trade-list/trade-trade-list.component';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    NodeComponent,
    ExampleAComponent,
    ExampleBComponent,
    GroupComponent,
    MarketTradeComponent,
    MarketDepthComponent,
    TradeOrderComponent,
    TradeOrderListComponent,
    TradeTradeListComponent,
    TradePositionListComponent,
    MarketChartComponent,
    MarketMarketComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    PortalModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
  entryComponents: [ExampleAComponent, ExampleBComponent, MarketMarketComponent, MarketChartComponent, MarketDepthComponent,
    MarketTradeComponent, TradeOrderListComponent, TradeTradeListComponent, TradePositionListComponent]
})
export class AppModule { }
