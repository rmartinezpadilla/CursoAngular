import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabajando con Directivas App';
  mensajeDelFormulario="Registro de usuarios";
  nombre:string="";
  apellido:string="";
  cargo:string="";
  mensaje="";
  registrado=false;
  entradas: string []= ["Esto es un ejemplo", " de una lista", "Otro ejemplos"];

  constructor(){

  }




  registrarUsuario(){
    this.registrado=true;
      this.mensaje= "usuario registrado correctamente";
  }
}
