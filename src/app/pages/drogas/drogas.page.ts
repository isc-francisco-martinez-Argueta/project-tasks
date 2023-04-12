import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-drogas",
    templateUrl: "./drogas.page.html",
    styleUrls: ["./drogas.page.scss"],
})
export class DrogasPage implements OnInit {
    drogas: FormGroup = new FormGroup({});
    constructor(private fb: FormBuilder) {
        this.crearFormulario();
    }

    ngOnInit() {}
    crearFormulario() {
        this.drogas = this.fb.group({
            tipo: ["", [Validators.required]],
            calidad: ["", [Validators.required]],
            cantidad: ["", [Validators.required]],
            unidad: ["", [Validators.required]],
            observaciones: ["", [Validators.required]],
        });
    }
    onSubmit() {
        if (this.drogas.invalid) {
            return Object.values(this.drogas.controls).forEach((control) => {
                if (control instanceof FormGroup) {
                    Object.values(control.controls).forEach((control) =>
                        control.markAllAsTouched()
                    );
                } else {
                    control.markAsTouched();
                }
            });
        }
        console.log(this.drogas.value);
    }
}
