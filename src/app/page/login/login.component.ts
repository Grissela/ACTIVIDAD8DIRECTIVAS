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
 
  // mi funcion
  enviar(nom: string, ape: string, edad: string) {
    this.name = nom
    this.ape = ape
    this.age = edad
    this.condicion;

    // mi clase los tipos de variables
    class  ListarPersona {
      firstName: string
      lastName: string
      edadAge: string
      constructor(nom: string, ape: string, age: string) {
        this.firstName = nom
        this.lastName = ape
        this.edadAge = age
      }
    }
    var green= new ListarPersona(this.name, this.ape, this.age)
  // para que muestre en la pagina con el push
    this.datos.push(green)
    console.log(green)
  }

}
