import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Command } from 'protractor';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent implements OnInit {
  email:string
  password:string

  

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  login() {
   

    if(this.email=="fernandoblue@yahoo.com" ,this.password=="1234"){

  
    this.router.navigate(['/Inicio']);
    
  }
  else{
    window.location.reload();
         alert("usuario no Registrado");
         
  }

  }
  

}


