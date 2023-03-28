import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  step: any = 1;
  persona = new FormGroup({
    calidad: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    incidentid: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    nombre: new FormControl('', [Validators.required]),
    apellidoP: new FormControl('', [Validators.required]),
    apellidoM: new FormControl('', [Validators.required]),
    alias: new FormControl([''], [Validators.required]),
    nacionalidad: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    ocupacion: new FormControl('', [Validators.required]),
    estadoCivil: new FormControl('', [Validators.required]),
    escolaridad: new FormControl('', [Validators.required]),
    nombrePadre: new FormControl('', [Validators.required]),
    nombreMadre: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    telefonoContacto: new FormControl('', [Validators.required]),
    estatura: new FormControl('', [Validators.required]),
    vestimenta: new FormControl('', [Validators.required]),
    sueldoSemanal: new FormControl('', [Validators.required]),
    direccion: new FormGroup({
      calle: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      colonia: new FormControl('', [Validators.required]),
      municipio: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      postal: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      lng: new FormControl('', [Validators.required]),
    }),
  });
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() {}

  ngOnInit(): void {}

  get nombreNoValido() {
    return (
      this.persona.get('nombre')?.invalid && this.persona.get('nombre')?.touched
    );
  }
  validateData() {
    if (this.step == 1) {
    } else if (this.step == 2) {
    } else if (this.step == 3) {
    } else if (this.step == 4) {
    }
  }
  previous() {
    this.step = this.step - 1;
  }

  next() {
    this.validateData();
    this.step = this.step + 1;
  }
  guardarDatos() {
    // console.log(this.persona.value);
    if (this.persona.invalid) {
      return Object.values(this.persona.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAllAsTouched()
          );
        } else {
          control.markAsTouched();
        }
        console.log(control);
      });
    }

    //posteo de info
    // this.persona.reset({});
  }
}
