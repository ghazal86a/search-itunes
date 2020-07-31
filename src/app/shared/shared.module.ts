import { NgModule } from '@angular/core';
import { UxHeaderComponent } from './components/ux-header/ux-header.component';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const UX_COMPONENTS: any[] = [UxHeaderComponent];

const UX_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  imports: UX_MODULES,
  declarations: UX_COMPONENTS,
  entryComponents: [],
  exports: [...UX_COMPONENTS, ...UX_MODULES],
})
export class SharedModule {}
