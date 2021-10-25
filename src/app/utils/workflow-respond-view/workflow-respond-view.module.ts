import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowRespondViewComponent } from './workflow-respond-view.component';



@NgModule({
  declarations: [WorkflowRespondViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    WorkflowRespondViewComponent
  ]
})
export class WorkflowRespondViewModule { }
