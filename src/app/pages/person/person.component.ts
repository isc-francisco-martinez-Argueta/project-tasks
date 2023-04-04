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
    this.addCard(1);
    this.addCard(2);
    this.addCard(3);
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.persona = this.fb.group({
      calidad: ['', [Validators.required]],
      incidentid: ['', [Validators.required]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z\u00C0-\u017F ]{3,254}'),
        ],
      ],
      apellidoP: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z\u00C0-\u017F]*'),
        ],
      ],
      apellidoM: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z\u00C0-\u017F]*'),
        ],
      ],
      alias: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      fechaNacimiento: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '([0-2][0-9]|3[0-1])(/|-)(0[1-9]|1[0-2])(/|-)[0-9]{4}'
          ),
        ],
      ],
      genero: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      escolaridad: ['', [Validators.required]],
      nombrePadre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z\u00C0-\u017F ]{3,254}'),
        ],
      ],
      nombreMadre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z\u00C0-\u017F ]{3,254}'),
        ],
      ],
      telefono: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      telefonoContacto: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      estatura: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+([.][0-9]+)?$')],
      ],
      vestimenta: ['', [Validators.required]],
      sueldoSemanal: ['', [Validators.required]],
      direccion: this.fb.group({
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
          Validators.minLength(5),
          Validators.pattern(/^[0-9]{5}$/),
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
      identificaciones: this.fb.array([]),
      señasParticulares: this.fb.array([]),
      antecedentes: this.fb.array([]),
      activo: [''],
      proceso: [''],
      observaciones: [''],
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
  initFormSeñas(): FormGroup {
    return new FormGroup({
      tipo: new FormControl(''),
      ubicacion: new FormControl(''),
      observaciones: new FormControl(''),
      archivo: new FormControl(''),
    });
  }
  initFormAntecedentes(): FormGroup {
    return this.fb.group({
      incidente: [''],
      diagnosticoMedico: [''],
      resolucionJuez: this.fb.group({
        resolucionJuez: ['', [Validators.required]],
        fechaHora: [''],
        horasDetencion: [''],
        fundamento: [''],
      }),
    });
  }

  addCard(val: number): void {
    switch (val) {
      case 1:
        const refId = this.persona.get('identificaciones') as FormArray;
        refId.push(this.initFormId());
        break;
      case 2:
        const refId2 = this.persona.get('señasParticulares') as FormArray;
        refId2.push(this.initFormSeñas());
        break;
      case 3:
        const refId3 = this.persona.get('antecedentes') as FormArray;
        refId3.push(this.initFormAntecedentes());
        break;

      default:
        break;
    }
  }
  removeCard(card: number, event: number): void {
    switch (card) {
      case 1:
        const refId = this.persona.get('identificaciones') as FormArray;
        refId.removeAt(event);
        break;
      case 2:
        const refId2 = this.persona.get('señasParticulares') as FormArray;
        refId2.removeAt(event);
        break;
      case 3:
        const refId3 = this.persona.get('antecedentes') as FormArray;
        refId3.removeAt(event);
        break;
    }
  }
  getCtrl(key: string, form: FormGroup): any {
    return form.get(key);
  }

  guardarDatos() {
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
    console.log(this.persona.value);

    //posteo de info
    // this.persona.reset({});
  }
}
