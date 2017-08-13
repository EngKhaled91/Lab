import { Component, OnInit } from '@angular/core';
import {fatora} from '../fatora'
@Component({
  selector: 'app-fatora',
  templateUrl: './fatora.component.html',
  styleUrls: ['./fatora.component.css']
})
export class FatoraComponent implements OnInit {
fatora1=new fatora()

 constructor() { }

 ngOnInit() {
  }





calculatefatora(milk,rice,soil,sugar){

this.fatora1.total=0
if(milk.value!==null){this.fatora1.total+=milk.value * this.fatora1.pricemilk}
if(rice.value!==null){this.fatora1.total+=rice.value * this.fatora1.pricerice}
if(soil.value!== null){this.fatora1.total+=soil.value * this.fatora1.pricesoil}
if(sugar.value!==null){this.fatora1.total+=sugar.value * this.fatora1.pricesugar}
return this.fatora1.total;

}


}


