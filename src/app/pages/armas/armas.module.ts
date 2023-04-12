import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ArmasPageRoutingModule } from "./armas-routing.module";

import { ArmasPage } from "./armas.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ArmasPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [ArmasPage],
})
export class ArmasPageModule {}
