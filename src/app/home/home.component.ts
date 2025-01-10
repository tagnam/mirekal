import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bannerImage ='assets/images/banner-2.png'

}
