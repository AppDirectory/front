import { Directive, ElementRef, Type, Inject } from '@angular/core';
import { Material as MaterialService } from "../../services/ui";

import { MaterialTextfield } from './material/text-field';
import { MaterialUpload } from './material/upload';
import { MaterialSwitch } from './material/switch';

@Directive({
  selector: '[mdl]',
  inputs: ['mdl']
})

export class Material {
  private element: any;
  mdl: any;

  constructor(_element: ElementRef) {
    this.element = _element.nativeElement;
  }

  ngAfterViewInit() {
    MaterialService.updateElement(this.element);
  }
}

export const MDL_DIRECTIVES: any[] = [Material, MaterialTextfield, MaterialUpload, MaterialSwitch];
