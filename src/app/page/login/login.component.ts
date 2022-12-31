import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  
  name!: string
  ape!: string
  age!: string
  condicion!: string
  datos:any[]= []
 
  // mi funcion y mis campos
  enviar(nombres: string, apellido: string, edad: string) {
    this.name = nombres
    this.ape = apellido
    this.age = edad
    this.condicion;

    // mi clase los tipos de variables y su constructor para inicializar mis campos de mi clase
    class  Lista {
      firstName: string
      lastName: string
      edadAge: string
      constructor(nom: string, apel: string, edad: string) {
        this.firstName = nom
        this.lastName = apel
        this.edadAge = edad
      }
    }
    // mi variable informacion para despues mostrar en el this.datos
    var informacion= new Lista(this.name, this.ape, this.age)
  // para que muestre en la pagina con el push
    this.datos.push(informacion)
    
  }

}
