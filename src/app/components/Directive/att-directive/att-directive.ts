import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [CommonModule],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.scss'
})
export class AttDirective {
  div1ClassName = signal<string>("");

  isDivGreen: boolean = false;
  setBgClass(className: string) {
    this.div1ClassName.set(className)
  }


  toggleDivColor() {
    this.isDivGreen = !this.isDivGreen;
  }
}
