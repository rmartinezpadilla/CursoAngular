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
  esteEsElNuevoMensaje="";
  empresa = "Google";
  //empresa = "T-Evolvers"


  //metodo getter
  getEdad(){
    return this.edad;
  }

  visibilidad = false;

  usuarioRegistrado = false;

  textoDeregistro="No hay nadie registrado";


  getCambiarCheckUsuarioregistrado(){
    this.usuarioRegistrado=true;
  }

  cambiaEmpresa(value:String){

  }

  setUsuarioRegistrado(event: Event){
   //  alert("Ya estás registrado correctamente");
   //this.textoDeregistro="Te acabas de registrar";

   //alert(((event.target as HTMLInputElement).value));


   if ((event.target as HTMLInputElement).value=="si") {
    this.textoDeregistro="Te acabas de registrar";
   }else{
    this.textoDeregistro="No hay nadie registrado";
   }
  }

  pasasteElMouse(event: Event){

    this.esteEsElNuevoMensaje="Acabas de pasar el mouse por el texto prohibido";


  }

  quitasteElMouse(event: Event){

    this.esteEsElNuevoMensaje="";

  }


  constructor() { }

  ngOnInit(): void {
  }

}
