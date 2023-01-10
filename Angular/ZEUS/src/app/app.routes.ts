import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { HeroinasComponent } from "./component/heroinas/heroinas.component";
import { HeroeComponent } from "./component/heroe/heroe.component";
import { FormularioComponent } from "./component/formulario/formulario.component";



const APP_ROUTES: Routes=[
{path:'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'heroinas', component: HeroinasComponent},
{path:'formulario', component: FormularioComponent},
{path:'heroe/:id', component: HeroeComponent},

{path:'**', pathMatch: 'full', redirectTo:'home'},


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); 