import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputboxComponent),
      multi: true,
    },
  ],
})
export class InputboxComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';

  // Private variable to hold the value
  private _value: string = '';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Getter und Setter für value
  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
  }

  // Implementierung der ControlValueAccessor-Methoden
  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Optional: Set disabled state if required
  setDisabledState?(isDisabled: boolean): void {
    // Handling disabled state here if necessary
  }

  // Handhabt die Eingabeänderung und aktualisiert den Wert
  handleInputChange(value: string): void {
    this.value = value; // Dies wird den Getter aufrufen
  }
}
