import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule
];

@NgModule({
  exports: [MATERIAL_MODULES]
})
export class MaterialModule { }
