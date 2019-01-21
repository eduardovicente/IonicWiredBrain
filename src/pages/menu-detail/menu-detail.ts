import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuServiceProvider } from '../../providers/menu-service/menu-service';

@IonicPage()
@Component({
  selector: 'page-menu-detail',
  templateUrl: 'menu-detail.html',
})
export class MenuDetailPage implements OnInit{

  theCoffee = {
    id:'',
    name:'',
    description:'',
    img:'',
    small:0,
    medium:0,
    large:0,
    size:'',
    price:0,
    milk:'none',
    whip:'none'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private menuList: MenuServiceProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDetailPage');
  }

  ngOnInit(){
    let id = this.navParams.get('id');
    this.menuList.getOne(id).then(
      ret => this.initObject(ret)
    );
  }

  initObject(myData){
    this.theCoffee.id = myData.id;
    this.theCoffee.name = myData.name;
    this.theCoffee.description = myData.description;
    this.theCoffee.img = myData.img;
    this.theCoffee.small = myData.small;
    this.theCoffee.medium = myData.medium;
    this.theCoffee.large = myData.large;
    this.theCoffee.price = myData.small;
  }

  addToCart(){
    if(this.theCoffee.price==this.theCoffee.small){
      this.theCoffee.size='small';
    }else if(this.theCoffee.price==this.theCoffee.medium){
      this.theCoffee.size='medium';
    }else{
      this.theCoffee.size='large';
    }
    console.log('clicked',this.theCoffee);
  }

}
