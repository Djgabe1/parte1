import { Component, OnInit } from '@angular/core';

import { Compras } from "../models/compras";
import { ComprasService } from '../services/compras.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  notFound = false;
  cliente: Compras;
  constructor(private comprasService: ComprasService, private activatedRoute: ActivatedRoute, private route: Router) { 
/*   const clientId= this.activatedRoute.snapshot.paramMap.get("clientId");
  console.log(id) */;
  
  }

  ngOnInit(){
   this.activatedRoute.paramMap.subscribe(params =>{
    if (params.has("clientId")) {
      this.comprasService.getClientes(params.get("clientId")).subscribe((clientesFrom : Compras)=>{
        this.cliente = clientesFrom;
      });
    }
    
   }
    
    )
    
   
  }
   
  /* getCliente(clientId){
    this.notFound = false;
    this.cliente = null;
   
    this.comprasService.getClientes(clientId).subscribe((clientesFromTheApi : Compras)=>{
        this.cliente = clientesFromTheApi;
        
        console.log(this.cliente);
        
        
    }, (err: any)=>{
      console.log(err);
      this.notFound = true;
      
    })



  } */
}
