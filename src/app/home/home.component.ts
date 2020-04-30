import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Compras } from "../models/compras";
import { ComprasService } from '../services/compras.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  })
export class HomeComponent implements OnInit {

  notFound = false;
  compras: Compras;
  cliente: Compras;

  constructor(private comprasService: ComprasService) {

   }

  ngOnInit() {
  }

  getCompra(date: string ){
      this.notFound = false;
      this.compras = null;


      this.comprasService.getCompras(date).subscribe((comprasFromTheApi : Compras)=>{
        this.compras  =  comprasFromTheApi;
        

        console.log( this.compras); 
        
      }, (err: any) =>{
        console.log(err);
        this.notFound = true;
      })
  }

  

}
