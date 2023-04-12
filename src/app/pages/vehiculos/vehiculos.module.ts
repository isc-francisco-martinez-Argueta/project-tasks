import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VehiculosPageRoutingModule } from "./vehiculos-routing.module";

import { VehiculosPage } from "./vehiculos.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        VehiculosPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [VehiculosPage],
})
export class VehiculosPageModule {}
