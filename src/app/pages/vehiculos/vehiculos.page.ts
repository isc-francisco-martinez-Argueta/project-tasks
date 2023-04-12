import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-vehiculos",
    templateUrl: "./vehiculos.page.html",
    styleUrls: ["./vehiculos.page.scss"],
})
export class VehiculosPage implements OnInit {
    vehiculo: FormGroup = new FormGroup({});
    constructor(private fb: FormBuilder) {
        this.crearFormulario();
    }

    ngOnInit() {}
    crearFormulario() {
        this.vehiculo = this.fb.group({
            calidad: ["", [Validators.required]],
            tipo: ["", [Validators.required]],
            modelo: [
                "",
                [Validators.required, Validators.pattern("[0-9]{4,4}")],
            ],
            marca: ["", [Validators.required]],
            submarca: ["", [Validators.required]],
            color: ["", [Validators.required]],
            placa: [
                "",
                [Validators.required, Validators.pattern("[a-zA-Z0-9]*")],
            ],
            serie: [
                "",
                [Validators.required, Validators.pattern("[a-zA-Z0-9]*")],
            ],
            motor: [
                "",
                [Validators.required, Validators.pattern("[a-zA-Z0-9]*")],
            ],
            niv: [
                "",
                [Validators.required, Validators.pattern("[a-zA-Z0-9]*")],
            ],
            propietario: ["", [Validators.required]],
            observaciones: ["", [Validators.required]],
        });
    }

    onSubmit() {
        if (this.vehiculo.invalid) {
            return Object.values(this.vehiculo.controls).forEach((control) => {
                if (control instanceof FormGroup) {
                    Object.values(control.controls).forEach((control) =>
                        control.markAllAsTouched()
                    );
                } else {
                    control.markAsTouched();
                }
            });
        }
        console.log(this.vehiculo.value);
    }
}
