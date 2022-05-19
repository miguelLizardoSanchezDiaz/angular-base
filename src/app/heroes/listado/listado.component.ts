import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[]=['Spiderman','Goku','Ironman','captain america'];
  heroeBorrado:string='';


  borrarHeroe(){
    const heroeBorrado=this.heroes.shift() || '';
    this.heroeBorrado=heroeBorrado
  }











  /*constructor() {
    console.log('í-m on constructors')
   }

  ngOnInit(): void {
    console.log('ím on NgOnInit')
  }*/

}
