import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { ContrlFlow } from "./components/contrl-flow/contrl-flow";

@Component({
  selector: 'app-root',
  imports: [RouterModule, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Angular20';
}
