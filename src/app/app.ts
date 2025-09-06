import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { IngresoComponent } from "./ingreso/ingreso.component";
import { EgresoComponent } from "./egreso/egreso.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceroComponent, FormularioComponent, IngresoComponent, EgresoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app-presupuesto';
}
