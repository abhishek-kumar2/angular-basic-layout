import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../../shared/navbar/navbar';
import { Footer } from '../../../shared/footer/footer';

@Component({
  selector: 'app-auth-layout',
  imports: [Navbar, Footer, RouterModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css'
})
export class AuthLayout {

}
