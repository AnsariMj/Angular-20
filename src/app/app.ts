import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from "./shared/nav/nav";
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterModule, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Angular20';
  // modalService = inject(ModalService);
}
