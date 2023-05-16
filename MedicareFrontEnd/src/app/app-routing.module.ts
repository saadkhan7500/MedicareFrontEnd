import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MedDetailsComponent } from './med-details/med-details.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';
import { MedicineComponent } from './medicine/medicine.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {"path":"users",component:UserlistComponent},
  {"path":"form",component:FormComponent},
  {"path":"med-form",component:MedicineFormComponent},
  {"path":"login",component:LoginComponent},
  {"path":"medicare",component:MedicineComponent},
  {"path":"details/:id",component:UserdetailsComponent},
  {"path":"medDetails/:id",component:MedDetailsComponent},
  {"path":"edit/:id",component:EditUserComponent},
  {"path":"edit-med/:id",component:EditMedicineComponent},
  {"path":"",component:DashboardComponent},
  {"path":"dashboard",component:DashboardComponent},
  {"path": "userArea", component: UserAreaComponent},
  {path:"order", component:OrderComponent},
  {
    path: "adminArea", component: AdminAreaComponent,
    children:
      [

        { path: "users", component: UserlistComponent },
        { path: "medicare", component: MedicineComponent },
        { path: "med-form", component: MedicineFormComponent },
        { path: "userDetails/:id",component:UserdetailsComponent},
        {path:  "editDetails/:id",component:EditUserComponent},
        {path:  "medDetails/:id",component:MedDetailsComponent},
        {path:  "editMedDetails/:id",component:EditMedicineComponent}
      ]


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
