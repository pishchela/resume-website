import { Directive, HostBinding, Input } from '@angular/core';

@Directive()
export abstract class SectionsBase {
  @Input()
  @HostBinding('style.background-color')
  public backgroundColor!: string | undefined;
  @Input()
  @HostBinding('style.color')
  public color!: string | undefined;
}
