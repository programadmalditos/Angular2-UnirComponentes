import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Classes/Producto';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  productos: Array<Producto> = [];

  ngOnInit(){
    this.productos.push(new Producto(1, 'Patatas', 1, 3, 'Patatas para freir'));
    this.productos.push(new Producto(2, 'Huevos', 6, 3, 'Para comer con las patatas'));
  }

  guardar(model:Producto){
      let v=Math.max.apply(Math,this.productos.map(function(o){return o.id;}));
      model.id=++v;
      this.productos.push(model);

  }

  }
