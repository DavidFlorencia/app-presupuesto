import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { IngresoComponent } from "./ingreso/ingreso.component";
import { EgresoComponent } from "./egreso/egreso.component";
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceroComponent, FormularioComponent, IngresoComponent, EgresoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal(): number {
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(): number {
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
