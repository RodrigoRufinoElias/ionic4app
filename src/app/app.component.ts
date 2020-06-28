import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  paginas: any[] = [
    {
      titulo: 'Home',
      url: '/home',
      icone: 'home'
    },
    {
      titulo: 'Instalação',
      url: '/instalacao',
      icone: 'arrow-dropright'
    },
    {
      titulo: 'Layout',
      url: '/layout',
      icone: 'arrow-dropright'
    },
    {
      titulo: 'Componentes',
      url: '/componentes',
      icone: 'arrow-dropright'
    },
    {
      titulo: 'Animações',
      url: '/animacoes',
      icone: 'arrow-dropright'
    },
    {
      titulo: 'Componentes Nativos',
      url: '/componentesNativos',
      icone: 'arrow-dropright'
    }
  ];

  /* PODE SER ASSIM TBM
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];*/

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
