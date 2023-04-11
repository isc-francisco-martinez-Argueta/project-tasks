import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DrogasPageRoutingModule } from "./drogas-routing.module";

import { DrogasPage } from "./drogas.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DrogasPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [DrogasPage],
})
export class DrogasPageModule {}
