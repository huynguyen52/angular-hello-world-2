import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ToggleButtonComponent,
      multi: true,
    },
  ],
})
export class ToggleButtonComponent implements ControlValueAccessor {
  @Input() value: boolean = false;
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<boolean>();

  onChange: any = () => {};
  onTouched: any = () => {};

  toggle() {
    this.value = !this.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  writeValue(value: boolean): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
