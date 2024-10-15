import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {HomeComponent} from "./components/home/home.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "configuration",
    component: ConfigurationComponent
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
