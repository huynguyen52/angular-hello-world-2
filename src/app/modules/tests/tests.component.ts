import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleButtonComponent } from '../../components/toggle-button/toggle-button.component';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [CommonModule, ToggleButtonComponent],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
})
export class TestsComponent {
  isActive = false;
  isActive2 = false;

  onActive2Change(value: boolean) {
    console.log('value:', value);
    console.log('isActive2:', this.isActive2);
    this.isActive2 = value;
  }

  submit() {
    console.log('isActive:', this.isActive);
    console.log('isActive2:', this.isActive2);
  }
}
