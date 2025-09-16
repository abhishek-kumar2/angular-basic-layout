import { Component } from '@angular/core';
import { Navbar } from '../../../shared/navbar/navbar';
import { Footer } from '../../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  imports: [Navbar, Footer, RouterModule],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css'
})
export class DefaultLayout {

}
