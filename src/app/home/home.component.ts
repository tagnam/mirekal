import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bannerImage ='assets/images/banner-2.png'

}
