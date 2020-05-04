import { NgModule } from '@angular/core';
import { MaterialModules } from './material.module';

import { InputComponent } from './input/input.component';
import { TextAreaComponent } from './textarea/textarea.component';


@NgModule({
  declarations: [InputComponent, TextAreaComponent],
  imports: [
    MaterialModules
  ],
  exports: [InputComponent, TextAreaComponent]
})
export class UiModule { }
