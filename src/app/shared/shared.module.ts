import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { NewPostCardComponent } from './cards/new-post-card/new-post-card.component';
import { NewPostFormComponent } from './forms/new-post-form/new-post-form.component';
import { FormsModule } from '@angular/forms';
import { NewPostActionsComponent } from './forms/new-post-form/new-post-actions/new-post-actions.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NewPostCardComponent,
    NewPostFormComponent,
    NewPostActionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NewPostCardComponent,
    NewPostFormComponent
  ]
})
export class SharedModule { }
