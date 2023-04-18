import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Componente, Usuario } from "../interfaces/interfaces";

@Injectable({
    providedIn: "root",
})
export class DataService {
    constructor(private http: HttpClient) {}

    getMenuOpts() {
        return this.http.get<Componente[]>("/assets/data/menu-opts.json");
    }

    getUsuarios() {
        return this.http.get<Usuario[]>("/assets/data/users.json");
    }
}
