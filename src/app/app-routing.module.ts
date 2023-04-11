import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full",
    },
    {
        path: "inicio",
        loadChildren: () =>
            import("./pages/inicio/inicio.module").then(
                (m) => m.InicioPageModule
            ),
    },
  {
    path: 'persona',
    loadChildren: () => import('./pages/persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'drogas',
    loadChildren: () => import('./pages/drogas/drogas.module').then( m => m.DrogasPageModule)
  },
  {
    path: 'armas',
    loadChildren: () => import('./pages/armas/armas.module').then( m => m.ArmasPageModule)
  },
  {
    path: 'vehiculos',
    loadChildren: () => import('./pages/vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
