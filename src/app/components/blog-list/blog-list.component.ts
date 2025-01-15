import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Blog {
  image: string;
  category: string;
  date: string;
  readTime: number;
  title: string;
  excerpt: string;
  id?: number;
  route: string;
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [
    {
      id: 2,
      image: 'assets/blog/maintenance-tips.svg',
      category: 'Maintenance Tips',
      date: 'March 12, 2024',
      readTime: 4,
      route: 'essential-maintenance-tips',
      title: '5 Essential Maintenance Tips for Your Sugarcane Machine',
      excerpt: 'Learn the key maintenance practices to extend the life of your sugarcane juice machine and ensure optimal performance...'
    },
    {
      id: 3,
      image: 'assets/blog/business-startup.svg',
      category: 'Business Insights',
      date: 'March 10, 2024',
      readTime: 6,
      route: 'business-startup',
      title: 'Starting a Successful Sugarcane Juice Business',
      excerpt: 'A comprehensive guide to launching and scaling your sugarcane juice business with professional equipment...'
    },
    {
      id: 4,
      image: 'assets/blog/market-trends.svg',
      category: 'Industry News',
      date: 'March 8, 2024',
      readTime: 5,
      route: 'market-trends',
      title: 'Global Sugarcane Market Trends 2024',
      excerpt: 'Analysis of current market trends, challenges, and opportunities in the global sugarcane processing industry...'
    },
    {
      id: 5,
      image: 'assets/blog/eco-friendly-extractor.svg',
      category: 'Product Innovation',
      date: 'March 5, 2024',
      readTime: 3,
      route: 'eco-friendly-extractors',
      title: 'Introducing Our New Eco-Friendly Juice Extractors',
      excerpt: 'Discover our latest line of energy-efficient sugarcane machines designed with sustainability in mind...'
    },
    {
      id: 6,
      image: 'assets/blog/safety-guidelines.svg',
      category: 'Safety Guidelines',
      date: 'March 3, 2024',
      readTime: 4,
      route: 'safety-guidelines',
      title: 'Safety First: Operating Sugarcane Machines',
      excerpt: 'Essential safety protocols and best practices for operating commercial sugarcane juice extraction equipment...'
    },
    {
      id: 8,
      image: 'assets/blog/maximizing-yield.svg',
      category: 'Technical Guide',
      date: 'February 25, 2024',
      readTime: 6,
      route: 'maximizing-juice-yield',
      title: 'Maximizing Juice Yield: Expert Tips',
      excerpt: 'Technical insights on optimizing your machine settings for maximum sugarcane juice extraction...'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  readMore(blog: Blog): void {
    this.router.navigate([blog.route]);
  }

  shareBlog(blog: Blog, platform: string): void {
    // Implement social sharing functionality
    console.log('Sharing blog:', blog.id, 'on', platform);
  }
}
