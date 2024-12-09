import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


interface Slide {
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

interface Product {
  image: string;
  name: string;
  description: string;
  features: string[];
  badge?: string;
  delay: number;
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

  products: Product[] = [
    {
      image: 'assets/products/machine-1.jpg',
      name: 'Sugarcane Juice Machine',
      description: 'Commercial-grade sugarcane juicer with automated cleaning system',
      badge: 'Best Seller',
      features: [
        'Stainless Steel Construction',
        'Automated Cleaning System',
        '200L/Hour Capacity',
        'Digital Control Panel'
      ],
      delay: 100
    },
    {
      image: 'assets/products/machine-2.jpg',
      name: 'Commercial Sugarcane Juice Machine',
      description: 'Perfect for small to medium businesses with space constraints',
      features: [
        'Space-Saving Design',
        'Easy Maintenance',
        '150L/Hour Capacity',
        'Quiet Operation'
      ],
      delay: 200
    },
    {
      image: 'assets/products/machine-3.jpg',
      name: 'Rapid Sugarcane Juicer Machine',
      description: 'High-capacity industrial juicer for large-scale operations',
      badge: 'New',
      features: [
        'Heavy-duty Construction',
        'Continuous Operation',
        '300L/Hour Capacity',
        'Advanced Safety Features'
      ],
      delay: 300
    }
  ];

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
    AOS.refresh();
    AOS.init({
      duration: 1000,          // Duration of animation
      easing: 'ease-in-out',   // Easing for smoother animations
      once: false,             // Whether animation should happen only once
      mirror: true,            // Whether elements should animate out while scrolling past them
      offset: 100,             // Offset (in px) from the original trigger point
      delay: 0,                // Default delay
      anchorPlacement: 'top-bottom', // Anchor placement
      disable: 'mobile'        // Disable on mobile devices if needed
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
