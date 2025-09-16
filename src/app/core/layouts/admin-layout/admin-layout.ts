import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../../shared/navbar/navbar';
import { Footer } from '../../../shared/footer/footer';
import { AdminSidebar } from "../../../components/admin-sidebar/admin-sidebar";

@Component({
  selector: 'app-admin-layout',
  imports: [Navbar, Footer, RouterModule, AdminSidebar],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {

}
