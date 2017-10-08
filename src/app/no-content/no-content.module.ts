import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './no-content.routes';
import { NoContentComponent } from './no-content.component';

@NgModule({
  declarations: [NoContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})

export class NoContentModule {
  public static routes = routes;
}
