import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
  
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
{id:1,nombre:'German',apellido:'Sanchez',createAt:'2077',email:'jijijojo@juju.com'},
{id:1,nombre:'loloan',apellido:'Sqwwez',createAt:'2127',email:'jasdjo@juju.com'},
{id:1,nombre:'kikian',apellido:'araschez',createAt:'20377',email:'jijgfdghojo@juju.com'},
{id:1,nombre:'Gwfgman',apellido:'Sbnbchez',createAt:'177',email:'jhgfjojo@juju.com'},
{id:1,nombre:'Geaawn',apellido:'Sdfz',createAt:'2037',email:'wqwejojo@juju.com'}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
