import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


interface Slide {
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  autoplayEnabled = true;
  private autoplayInterval: any;
  private touchStartX = 0;
  private touchEndX = 0;

  slides: Slide[] = [
    {
      image: 'assets/slider/1.jpeg',
      title: 'Innovation Redefined',
      description: 'Leading the way in technological advancement',
      ctaText: 'Explore Innovation',
      ctaLink: '/innovation'
    },
    {
      image: 'assets/slider/2.jpeg',
      title: 'Future Forward',
      description: 'Building tomorrow\'s solutions today',
      ctaText: 'View Solutions',
      ctaLink: '/solutions'
    },
    {
      image: 'assets/slider/3.jpeg',
      title: 'Excellence Delivered',
      description: 'Committed to exceptional quality',
      ctaText: 'Our Services',
      ctaLink: '/services'
    },
    {
      image: 'assets/slider/4.jpeg',
      title: 'Smart Solutions',
      description: 'Innovative approaches to modern challenges',
      ctaText: 'Learn More',
      ctaLink: '/about'
    },
    {
      image: 'assets/slider/5.jpeg',
      title: 'Global Impact',
      description: 'Making a difference worldwide',
      ctaText: 'Our Impact',
      ctaLink: '/impact'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 100
    });
    this.startSlideShow();
  }

  ngOnDestroy() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  startSlideShow() {
    if (this.autoplayEnabled) {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  stopSlideShow() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  toggleAutoplay() {
    this.autoplayEnabled = !this.autoplayEnabled;
    if (this.autoplayEnabled) {
      this.startSlideShow();
    } else {
      this.stopSlideShow();
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  handleTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  handleTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  handleTouchEnd() {
    const SWIPE_THRESHOLD = 50;
    const touchDiff = this.touchStartX - this.touchEndX;

    if (Math.abs(touchDiff) > SWIPE_THRESHOLD) {
      if (touchDiff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }
}
