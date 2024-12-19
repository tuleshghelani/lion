import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Blog {
  image: string;
  category: string;
  date: string;
  readTime: number;
  title: string;
  excerpt: string;
  id: number;
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
      id: 1,
      image: 'assets/blog/blog1.jpg',
      category: 'Technology Trends',
      date: 'March 15, 2024',
      readTime: 7,
      route: 'essential-maintenance-tips',
      title: 'AI-Powered Sugarcane Processing: The Next Revolution',
      excerpt: 'Explore how artificial intelligence is transforming sugarcane juice extraction with smart automation and predictive maintenance...'
    },
    {
      id: 2,
      image: 'assets/blog/blog1.jpg',
      category: 'Maintenance Tips',
      date: 'March 12, 2024',
      readTime: 4,
      route: 'essential-maintenance-tips',
      title: '5 Essential Maintenance Tips for Your Sugarcane Machine',
      excerpt: 'Learn the key maintenance practices to extend the life of your sugarcane juice machine and ensure optimal performance...'
    },
    {
      id: 3,
      image: 'assets/blog/blog1.jpg',
      category: 'Business Insights',
      date: 'March 10, 2024',
      readTime: 6,
      route: 'essential-maintenance-tips',
      title: 'Starting a Successful Sugarcane Juice Business',
      excerpt: 'A comprehensive guide to launching and scaling your sugarcane juice business with professional equipment...'
    },
    {
      id: 4,
      image: 'assets/blog/blog1.jpg',
      category: 'Industry News',
      date: 'March 8, 2024',
      readTime: 5,
      route: 'essential-maintenance-tips',
      title: 'Global Sugarcane Market Trends 2024',
      excerpt: 'Analysis of current market trends, challenges, and opportunities in the global sugarcane processing industry...'
    },
    {
      id: 5,
      image: 'assets/blog/blog1.jpg',
      category: 'Product Innovation',
      date: 'March 5, 2024',
      readTime: 8,
      route: 'essential-maintenance-tips',
      title: 'Introducing Our New Eco-Friendly Juice Extractors',
      excerpt: 'Discover our latest line of energy-efficient sugarcane machines designed with sustainability in mind...'
    },
    {
      id: 6,
      image: 'assets/blog/blog1.jpg',
      category: 'Safety Guidelines',
      date: 'March 3, 2024',
      readTime: 3,
      route: 'essential-maintenance-tips',
      title: 'Safety First: Operating Sugarcane Machines',
      excerpt: 'Essential safety protocols and best practices for operating commercial sugarcane juice extraction equipment...'
    },
    {
      id: 7,
      image: 'assets/blog/blog1.jpg',
      category: 'Customer Success',
      date: 'February 28, 2024',
      readTime: 5,
      route: 'essential-maintenance-tips',
      title: 'From Street Vendor to Franchise Owner',
      excerpt: 'How our client built a successful juice bar chain using Lion Machine equipment...'
    },
    {
      id: 8,
      image: 'assets/blog/blog1.jpg',
      category: 'Technical Guide',
      date: 'February 25, 2024',
      readTime: 6,
      route: 'essential-maintenance-tips',
      title: 'Maximizing Juice Yield: Expert Tips',
      excerpt: 'Technical insights on optimizing your machine settings for maximum sugarcane juice extraction...'
    },
    {
      id: 9,
      image: 'assets/blog/blog1.jpg',
      category: 'Industry Events',
      date: 'February 22, 2024',
      readTime: 4,
      route: 'essential-maintenance-tips',
      title: 'Highlights from FoodTech 2024',
      excerpt: 'Key takeaways from the latest food processing technology exhibition featuring innovative sugarcane solutions...'
    }
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
