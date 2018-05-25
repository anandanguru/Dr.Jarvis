var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalsettingsPage } from '../modalsettings/modalsettings';
import { EditPage } from '../edit/edit';
import { Camera } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the PopovermenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let PopovermenuPage = class PopovermenuPage {
    constructor(camera, actionSheetCtrl, modal, navCtrl, navParams, view) {
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PopovermenuPage');
    }
    settings() {
        this.view.dismiss();
        let modal = this.modal.create(ModalsettingsPage, { docName: this.navParams.get('name'), department: this.navParams.get('department'), Ward: this.navParams.get('ward'), Immage: this.navParams.get('image') });
        modal.present();
        this.view.dismiss({
            image: null
        });
    }
    Edit() {
        this.view.dismiss();
        let mod = this.modal.create(EditPage, { onoff: this.navParams.get('toggleoption') });
        mod.present();
    }
    attach() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'select your image from',
            buttons: [
                {
                    text: 'Camera',
                    role: 'Camera',
                    handler: () => {
                        this.camera.getPicture({
                            destinationType: this.camera.DestinationType.DATA_URL,
                            quality: 100,
                        }).then((imageData) => {
                            // imageData is a base64 encoded string
                            this.base6Image = "data:image/jpeg;base64," + imageData;
                            this.view.dismiss({
                                image: this.base6Image
                            });
                        }, (err) => {
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    role: 'Gallery',
                    handler: () => {
                        const options = {
                            destinationType: this.camera.DestinationType.DATA_URL,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                        };
                        this.camera.getPicture(options).then((imageData) => {
                            this.base6Image = "data:image/jpeg;base64," + imageData;
                            this.view.dismiss({
                                image: this.base6Image
                            });
                        }, (err) => {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    }
};
PopovermenuPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-popovermenu',
        templateUrl: 'popovermenu.html',
    }),
    __metadata("design:paramtypes", [Camera, ActionSheetController, ModalController, NavController, NavParams, ViewController])
], PopovermenuPage);
export { PopovermenuPage };
//# sourceMappingURL=popovermenu.js.map