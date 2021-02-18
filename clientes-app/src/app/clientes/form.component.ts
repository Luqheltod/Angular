import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'

})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: string = "Crear Cliente";
  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

public cargarCliente(): void{
this.activatedRoute.params.subscribe(params=>{
  let id = params['id']
  if(id){
    this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
  }
} )
}

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire(  'Nuevo cliente',  'Cliente '+this.cliente.nombre+ ' creado con exito',  'success');
    }

    )

  }

public update():void{
  this.clienteService.update(this.cliente).subscribe(cliente =>{
    this.router.navigate(['/clientes'])
    Swal.fire(  'Cliente Actualizado',  'Cliente '+this.cliente.nombre+ ' actualizado con exito',  'success');
  })
}

}
