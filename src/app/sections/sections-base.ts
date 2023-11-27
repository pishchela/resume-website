import { Directive, HostBinding, Input } from "@angular/core";

@Directive()
export abstract class SectionsBase {
  @Input()
  @HostBinding('style.background-color')
  backgroundColor!: string | undefined;
  @Input()
  @HostBinding('style.color')
  color!: string | undefined;
}
