import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {

  nombre = "Ruben";
  apellido = "Martinez Padilla";
  edad = 33;
  //empresa = "T-Evolvers"


  //metodo getter
  getEdad(){
    return this.edad;
  }

  visibilidad = false;
  usuarioRegistrado = false;

  getCambiarCheckUsuarioregistrado(){
    this.usuarioRegistrado=true;
  }

  cambiaEmpresa(value:String){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
