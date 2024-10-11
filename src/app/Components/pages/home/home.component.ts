
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { HomeNavbarComponent } from '../../../home-navbar/home-navbar.component';
import { HomeService } from '../homeService';

import { MainHomeComponent } from "./main-home/main-home.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgTagTableComponent } from "../../ag-tag-table/ag-tag-table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeNavbarComponent, MainHomeComponent, FooterComponent, RouterOutlet, AgTagTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  
  
}
