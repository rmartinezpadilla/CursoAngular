import { Empleado } from './empleado.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

empleados: Empleado[]=[

  new Empleado("Rubén", "Martinez", "Ingeniero", 2940000),
  new Empleado("Fernanda", "Diaz", "Ingeniera", 4000000),
  new Empleado("David", "Luna", "Secretaria", 3940000),
];

almacenarEmpleado(){
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  this.empleados.push(miEmpleado);
}




cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}
