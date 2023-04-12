import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-armas",
    templateUrl: "./armas.page.html",
    styleUrls: ["./armas.page.scss"],
})
export class ArmasPage implements OnInit {
    armas: FormGroup = new FormGroup({});
    constructor(private fb: FormBuilder) {
        this.crearFormulario();
    }

    ngOnInit() {}
    crearFormulario() {
        this.armas = this.fb.group({
            nombre: ["", [Validators.required]],
            calidad: ["", [Validators.required]],
            cantidad: ["", [Validators.required]],
            tipo: ["", [Validators.required]],
            calibre: ["", [Validators.required]],
            matricula: [
                "",
                [Validators.required, Validators.pattern("[a-zA-Z0-9]*")],
            ],
            fabricante: ["", [Validators.required]],
            noSerie: [
                "",
                [Validators.required, Validators.pattern("[a-zA-Z0-9]*")],
            ],
            modelo: ["", [Validators.required]],
            archivos: ["", [Validators.required]],
            observaciones: ["", [Validators.required]],
        });
    }
    onSubmit() {
        if (this.armas.invalid) {
            return Object.values(this.armas.controls).forEach((control) => {
                if (control instanceof FormGroup) {
                    Object.values(control.controls).forEach((control) =>
                        control.markAllAsTouched()
                    );
                } else {
                    control.markAsTouched();
                }
            });
        }
        console.log(this.armas.value);
    }
}
