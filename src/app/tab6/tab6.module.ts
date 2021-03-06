import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { IonicModule, NavController, IonNavPush } from '@ionic/angular';
import { Tab6Page } from './tab6.page';

const routes: Routes = [
  { path: '',
    component: Tab6Page }
     
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab6Page }])
  ],
  declarations: [Tab6Page]
})
export class Tab6PageModule {}
