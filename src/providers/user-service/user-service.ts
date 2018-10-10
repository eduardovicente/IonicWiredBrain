import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(private afAuth:AngularFireAuth, private alertCtrl:AlertController) {
    
  }

  displayAlert(alertTitle, alertSub){
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }

  logOut(){
    this.afAuth.auth.signOut()
      .then(loggedOut => this.displayAlert('Logged out', 'Come back and visit soon'))
      .catch(err => this.displayAlert('Error logging out', err));
  }

}
