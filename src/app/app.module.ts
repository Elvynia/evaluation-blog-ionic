import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HomePage } from '../pages/home/home';
import { ProductProvider } from '../providers/product/product';

import { StockManagementPage } from '../pages/stock-management/stock-management';
import { ProductManagementPage } from '../pages/product-management/product-management';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StockManagementPage,
    ProductManagementPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StockManagementPage,
    ProductManagementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider
  ]
})
export class AppModule {}
