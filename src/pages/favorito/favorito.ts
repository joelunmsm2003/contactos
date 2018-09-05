import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
/**
 * Generated class for the FavoritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorito',
  templateUrl: 'favorito.html',
})
export class FavoritoPage {


   favoritos:any;

  constructor(public _categoria:CategoriasProvider,public navCtrl: NavController, public navParams: NavParams) {


            this._categoria.getfavoritos()
              .subscribe(data => {

                this.favoritos = data
                
              });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritoPage');
  }

}
