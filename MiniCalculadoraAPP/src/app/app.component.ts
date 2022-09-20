import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora APP';

  //declaramos tres variables de clase
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;
  mensaje:string="";

  // declaramos el metodo que resolverá el resultado

  sumar():void{

    if (isNaN(this.numero1) || isNaN(this.numero2)) {
        this.mensaje="Ambos deben ser números";
    }else{
      this.mensaje="Operación realizada correctamente";
      this.resultado=this.numero1+this.numero2;
    }

  }



}
