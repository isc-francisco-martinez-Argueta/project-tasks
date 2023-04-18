import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "src/app/interfaces/interfaces";
import { DataService } from "src/app/services/data.service";
import { IonList } from "@ionic/angular";
import { PdfMakeWrapper, Txt } from "pdfmake-wrapper";

@Component({
    selector: "app-usuarios",
    templateUrl: "./usuarios.page.html",
    styleUrls: ["./usuarios.page.scss"],
})
export class UsuariosPage implements OnInit {
    usuarios: Observable<Usuario[]>;
    @ViewChild(IonList) ionList: IonList;
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.usuarios = this.dataService.getUsuarios();
    }

    reporte(user: any) {
        console.log(user);
        const pdf = new PdfMakeWrapper();
        pdf.add(new Txt(user.name).bold().italics().end);
        pdf.create().open();
        this.ionList.closeSlidingItems();
    }
}
