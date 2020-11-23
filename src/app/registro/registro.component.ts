import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  Nombre:string
  email:string
  password:string
  password2:string

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Registro(){
    console.log(this.Nombre);
    console.log(this.email);
    console.log(this.password);
    console.log(this.password2);
    this.router.navigate(['/sesion']);
  }

}