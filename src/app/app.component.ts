import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite} from '@ionic-native/sqlite/ngx';

import { TasksServiceService } from '../app/tasks-service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
 // template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AppComponent {
  //rootPage: string = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public TasksServiceService: TasksServiceService,
    public sqlite: SQLite
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
    });
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      this.TasksServiceService.setDatabase(db);
      return this.TasksServiceService.createTable();
    })
    .then(() =>{
      this.splashScreen.hide();
      //this.rootPage='Tab1Page';
    })
    .catch(error =>{
      console.error(error);
    });
  }
}

