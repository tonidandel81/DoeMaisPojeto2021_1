import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampanhaCardsComponent } from './campanhas/campanha-cards/campanha-cards.component';
import { UsuarioRegistraComponent } from './usuarios/usuario-registra/usuario-registra.component';

const routes: Routes = [
    { path: 'campanhas', component: CampanhaCardsComponent },
    { path: '', component: UsuarioRegistraComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}