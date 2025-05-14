import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth/auth.guard';
import { Esercizio1Component } from './pages/esercizio-1/esercizio-1.component';
import { Esercizio2Component } from './pages/esercizio-2/esercizio-2.component';
import { Esercizio3Component } from './pages/esercizio-3/esercizio-3.component';
import { Esercizio4Component } from './pages/esercizio-4/esercizio-4.component';
import { Esercizio5Component } from './pages/esercizio-5/esercizio-5.component';
import { RoutingParamsComponent } from './components/components-esercizi-recenti/routing-params/routing-params.component';
import { QueryParamsComponent } from './components/components-esercizi-recenti/query-params/query-params.component';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControllerComponent } from './components/components-esercizi-recenti/form-controller/form-controller.component';
import { FormValidatorComponent } from './components/components-esercizi-recenti/form-validator/form-validator.component';
import { FormGroupComponent } from './components/components-esercizi-recenti/form-group/form-group.component';
import { FormQueriesComponent } from './components/components-esercizi-recenti/form-queries/form-queries.component';
import { SubmitReciverComponent } from './components/components-esercizi-recenti/submit-reciver/submit-reciver.component';
import { FormSignUpComponent } from './components/components-esercizi-recenti/form-sign-up/form-sign-up.component';
import { ObservableComponent } from './components/components-esercizi-recenti/observable/observable.component';
import { ObservableCompattoComponent } from './components/components-esercizi-recenti/observable-compatto/observable-compatto.component';
import { DoubleSubscriptionComponent } from './components/components-esercizi-recenti/double-subscription/double-subscription.component';
import { ErrorCompleteComponent } from './components/components-esercizi-recenti/error-complete/error-complete.component';
import { IntervalComponent } from './components/components-esercizi-recenti/interval/interval.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    component: FormSignUpComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'esercizio-1',
    component: Esercizio1Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'esercizio-2',
    component: Esercizio2Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'esercizio-3',
    component: Esercizio3Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'esercizio-4',
    component: Esercizio4Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'esercizio-5',
    component: Esercizio5Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'params/:id',
    component: RoutingParamsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'query',
    component: QueryParamsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form',
    component: FormControllerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form-validator',
    component: FormValidatorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form-group',
    component: FormGroupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form-sender',
    component: FormQueriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'submit-reciver',
    component: SubmitReciverComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'observer',
    component: ObservableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'observer-compatto',
    component: ObservableCompattoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'observer-doppio',
    component: DoubleSubscriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'observer-compelted',
    component: ErrorCompleteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'interval',
    component: IntervalComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
