import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
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
      identificaciones: new FormArray([], [Validators.required]),
      señasParticulares: new FormGroup({
        tipo: new FormControl(''),
        ubicacion: new FormControl(''),
        observaciones: new FormControl(''),
        archivo: new FormControl(''),
      }),
      antecedentes: new FormGroup({
        incidente: new FormControl(''),
        diagnosticoMedico: new FormControl(''),
        resolucionJuez: new FormGroup({
          resolucionJuez: new FormControl(''),
          fechaHora: new FormControl(''),
          horasDetencion: new FormControl(''),
          fundamento: new FormControl(''),
        }),
        objetosRemitidos: new FormGroup({
          descripcion: new FormControl(''),
          tipo: new FormControl(''),
        }),
      }),
      activo: new FormControl(''),
      proceso: new FormControl(''),
      observaciones: new FormControl(''),
    });
  }

  get nombreNoValido() {
    return (
      this.persona.get('nombre')?.invalid && this.persona.get('nombre')?.touched
    );
  }
  initFormId(): FormGroup {
    return new FormGroup({
      tipo: new FormControl('', [Validators.required]),
      emisor: new FormControl('', [Validators.required]),
      folio: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
    });
  }
  addId(): void {
    const refId = this.persona.get('identificaciones') as FormArray;
    refId.push(this.initFormId());
  }
  removeId(event: number): void {
    const refId = this.persona.get('identificaciones') as FormArray;
    refId.removeAt(event);
  }
  getCtrl(key: string, form: FormGroup): any {
    return form.get(key);
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
