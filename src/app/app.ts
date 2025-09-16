import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myLayoutApp');

  // Angular inject function use
  private themeService = inject(ThemeService);

  constructor() {
    this.themeService.initTheme()
  }
}
