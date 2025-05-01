import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/esercizi-passati/hello-world/hello-world.component';
import { IsLoggedComponent } from './components/esercizi-passati/is-logged/is-logged.component';
import { ArrayOfProductsComponent } from './components/esercizi-passati/array-of-products/array-of-products.component';
import { SwitchComponent } from './components/esercizi-passati/switch/switch.component';
import { ClassBtnComponent } from './components/esercizi-passati/class-btn/class-btn.component';
import { PadreInputComponent } from './components/esercizi-passati/padre-input/padre-input.component';
import { FiglioInputComponent } from './components/esercizi-passati/figlio-input/figlio-input.component';
import { ChildEmitterComponent } from './components/esercizi-passati/child-emitter/child-emitter.component';
import { ParentEmitterComponent } from './components/esercizi-passati/parent-emitter/parent-emitter.component';
import { ParentComponentComponent } from './components/components-esercizi-recenti/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/components-esercizi-recenti/child-component/child-component.component';
import { ChildObjectComponent } from './components/components-esercizi-recenti/child-object/child-object.component';
import { ParentObjectComponent } from './components/components-esercizi-recenti/parent-object/parent-object.component';
import { ChildEmitterEsercizioComponent } from './components/components-esercizi-recenti/child-emitter-esercizio/child-emitter-esercizio.component';
import { ParentEmitterEsercizioComponent } from './components/components-esercizi-recenti/parent-emitter-esercizio/parent-emitter-esercizio.component';
import { PayloadChildrenComponent } from './components/components-esercizi-recenti/payload-children/payload-children.component';
import { PayloadParentComponent } from './components/components-esercizi-recenti/payload-parent/payload-parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListParentComponent } from './components/components-esercizi-recenti/list-parent/list-parent.component';
import { ListChildrenComponent } from './components/components-esercizi-recenti/list-children/list-children.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AboutComponentComponent } from './pages/about/about-component.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Esercizio1Component } from './pages/esercizio-1/esercizio-1.component';
import { Esercizio2Component } from './pages/esercizio-2/esercizio-2.component';
import { Esercizio3Component } from './pages/esercizio-3/esercizio-3.component';
import { Esercizio4Component } from './pages/esercizio-4/esercizio-4.component';
import { Esercizio5Component } from './pages/esercizio-5/esercizio-5.component';
import { RoutingParamsComponent } from './components/components-esercizi-recenti/routing-params/routing-params.component';
import { QueryParamsComponent } from './components/components-esercizi-recenti/query-params/query-params.component';
import { FormControllerComponent } from './components/components-esercizi-recenti/form-controller/form-controller.component';
import { FormValidatorComponent } from './components/components-esercizi-recenti/form-validator/form-validator.component';
import { FormGroupComponent } from './components/components-esercizi-recenti/form-group/form-group.component';
import { FormQueriesComponent } from './components/components-esercizi-recenti/form-queries/form-queries.component';
import { SubmitReciverComponent } from './components/components-esercizi-recenti/submit-reciver/submit-reciver.component';
import { FormSignUpComponent } from './components/components-esercizi-recenti/form-sign-up/form-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    IsLoggedComponent,
    ArrayOfProductsComponent,
    SwitchComponent,
    ClassBtnComponent,
    PadreInputComponent,
    FiglioInputComponent,
    ChildEmitterComponent,
    ParentEmitterComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ChildObjectComponent,
    ParentObjectComponent,
    ChildEmitterEsercizioComponent,
    ParentEmitterEsercizioComponent,
    PayloadChildrenComponent,
    PayloadParentComponent,
    ListParentComponent,
    ListChildrenComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    LoginComponent,
    DashboardComponent,
    Esercizio1Component,
    Esercizio2Component,
    Esercizio3Component,
    Esercizio4Component,
    Esercizio5Component,
    RoutingParamsComponent,
    QueryParamsComponent,
    FormControllerComponent,
    FormValidatorComponent,
    FormGroupComponent,
    FormQueriesComponent,
    SubmitReciverComponent,
    FormSignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
