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
  persona: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.persona = this.fb.group({
      calidad: new FormControl('', [Validators.required]),
      incidentid: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      apellidoP: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      apellidoM: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      alias: new FormControl('', [Validators.required]),
      nacionalidad: new FormControl('', [Validators.required]),
      edad: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      fechaNacimiento: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '([0-2][0-9]|3[0-1])(/|-)(0[1-9]|1[0-2])(/|-)[0-9]{4}'
        ),
      ]),
      genero: new FormControl('', [Validators.required]),
      ocupacion: new FormControl('', [Validators.required]),
      estadoCivil: new FormControl('', [Validators.required]),
      escolaridad: new FormControl('', [Validators.required]),
      nombrePadre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      nombreMadre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      telefonoContacto: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      estatura: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+([.][0-9]+)?$'),
      ]),
      vestimenta: new FormControl('', [Validators.required]),
      sueldoSemanal: new FormControl('', [Validators.required]),
      direccion: new FormGroup({
        calle: new FormControl('', [Validators.required]),
        numero: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]+'),
        ]),
        colonia: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ]),
        municipio: new FormControl('', [Validators.required]),
        estado: new FormControl('', [Validators.required]),
        postal: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{5}$'),
        ]),
        lat: new FormControl('', [
          Validators.required,
          Validators.pattern('^-?[0-9]{1,3}(?:.[0-9]{1,10})?$'),
        ]),
        lng: new FormControl('', [
          Validators.required,
          Validators.pattern('^-?[0-9]{1,3}(?:.[0-9]{1,10})?$'),
        ]),
      }),
    });
  }

  get nombreNoValido() {
    return (
      this.persona.get('nombre')?.invalid && this.persona.get('nombre')?.touched
    );
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
      });
    }

    //posteo de info
    // this.persona.reset({});
  }
}
