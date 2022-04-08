import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faArrowRightFromBracket,
  faCirclePlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [InputComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [InputComponent, FontAwesomeModule],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser, faArrowRightFromBracket, faCirclePlus, faTrash);
  }
}
