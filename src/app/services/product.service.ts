import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        {
          id: 'scj-001',
          name: 'Sugarcane Juice Machine',
          image: 'assets/products/machine-1.jpg',
          description: 'High-performance sugarcane juice extractor with premium build quality and efficient operation.',
          badge: 'Best Seller',
          specifications: [
            { key: 'Motor Power', value: '0.5 HP' },
            { key: 'Capacity', value: '300 glass/hr' },
            { key: 'Yield', value: '100 ml/kg' },
            { key: 'Automation Grade', value: 'Semi Automatic' },
            { key: 'Warranty', value: '2 Year' },
            { key: 'Material', value: 'SS' },
            { key: 'Voltage', value: '220 V' },
            { key: 'Phase', value: 'Single' },
            { key: 'Frequency', value: '50 Hz' },
            { key: 'Power', value: '1000 W' },
            { key: 'Brand', value: 'Lion Machine' },
            { key: 'Usage', value: 'Crushing Sugarcanes To Extract Juice' },
            { key: 'Country of Origin', value: 'Made in India' }
          ],
          features: [
            'High extraction efficiency',
            'Food-grade stainless steel construction',
            'Easy maintenance design',
            'Energy efficient operation',
            'Compact footprint'
          ]
        },
        {
          id: 'scj-002',
          name: 'Commercial Sugarcane Juice Machine',
          image: 'assets/products/machine-2.jpg',
          description: 'Professional-grade commercial sugarcane juicer designed for high-volume operations.',
          specifications: [
            { key: 'Motor Power', value: '0.5 HP' },
            { key: 'Capacity', value: '300 glass/hr' },
            { key: 'Yield', value: '100 ml/kg' },
            { key: 'Automation Grade', value: 'Semi Automatic' },
            { key: 'Warranty', value: '2 Year' },
            { key: 'Usage/Application', value: 'Commercial' },
            { key: 'Material', value: 'SS' },
            { key: 'Voltage', value: '220 V' },
            { key: 'Phase', value: 'Single' },
            { key: 'Frequency', value: '50 Hz' },
            { key: 'Machine Type', value: 'Sugarcane Juice Machine' },
            { key: 'Brand', value: 'Lion Machine' },
            { key: 'Country of Origin', value: 'Made in India' }
          ],
          features: [
            'Commercial grade durability',
            'High volume production',
            'Easy cleaning system',
            'Professional design',
            'Reliable performance'
          ]
        },
        {
          id: 'scj-003',
          name: 'Rapid Sugarcane Juicer Machine',
          image: 'assets/products/machine-3.jpg',
          description: 'High-speed sugarcane juicer with advanced extraction technology.',
          badge: 'New',
          specifications: [
            { key: 'Motor Power', value: '0.5 HP' },
            { key: 'Crushing Capacity', value: '85 ltr/hour' },
            { key: 'Frequency', value: '50 Hz' },
            { key: 'Material Grade', value: 'SS 304 Food Grade' },
            { key: 'Phase', value: 'Single' },
            { key: 'Power', value: '0.37 kW' },
            { key: 'Voltage', value: '220 V' },
            { key: 'Weight', value: '42 kg' },
            { key: 'Body Material', value: 'SS' },
            { key: 'Dimension', value: '450X250X360 inch[LXWXH]' },
            { key: 'Model', value: 'Rapid' },
            { key: 'Juice Extraction Ratio', value: '73%' }
          ],
          features: [
            'Rapid juice extraction',
            'Food-grade SS 304 construction',
            'Compact design',
            'High efficiency ratio',
            'Professional grade components'
          ]
        },
        {
          id: 'scj-004',
          name: 'Sugarcane Juice Extraction Machine',
          image: 'assets/products/machine-1.jpg',
          description: 'Efficient and reliable sugarcane juice extraction system for commercial use.',
          specifications: [
            { key: 'Motor Power', value: '0.5 HP' },
            { key: 'Capacity', value: '300 glass/hr' },
            { key: 'Yield', value: '100 ml/kg' },
            { key: 'Automation Grade', value: 'Semi Automatic' },
            { key: 'Material', value: 'SS' },
            { key: 'Voltage', value: '220 V' },
            { key: 'Phase', value: 'Single' },
            { key: 'Frequency', value: '50 Hz' },
            { key: 'Brand', value: 'Lion Machine' },
            { key: 'Usage', value: 'Crushing Sugarcanes To Extract Juice' },
            { key: 'Country of Origin', value: 'Made in India' }
          ],
          features: [
            'Consistent extraction quality',
            'Durable construction',
            'Low maintenance design',
            'Energy efficient',
            'User-friendly operation'
          ]
        },
        {
          id: 'scj-005',
          name: 'Micro Sugarcane Juice Machine',
          image: 'assets/products/machine-1.jpg',
          description: 'Compact and efficient sugarcane juicer perfect for small businesses.',
          badge: 'Compact',
          specifications: [
            { key: 'Motor Power', value: '0.5 HP' },
            { key: 'Dimension', value: '14X9.30X12 inch [LXWXH]' },
            { key: 'Weight', value: '33kg' },
            { key: 'Voltage', value: '220 V' },
            { key: 'Phase', value: 'Single' },
            { key: 'Crushing Capacity', value: '45 ltr/hour' },
            { key: 'Juice Extraction Ratio', value: '73%' },
            { key: 'Frequency', value: '50 Hz' },
            { key: 'Material Grade', value: 'SS304 Food Grade' },
            { key: 'Power', value: '0.37 kW' },
            { key: 'Model', value: 'Micro' },
            { key: 'Body Material', value: 'SS' }
          ],
          features: [
            'Space-saving design',
            'Ideal for small businesses',
            'Food-grade materials',
            'Easy to operate',
            'Portable solution'
          ]
        },
        {
          id: 'scj-006',
          name: 'Sugarcane Juice Machine Petrol Engine 2 HP',
          image: 'assets/products/machine-1.jpg',
          description: 'Powerful petrol-engine operated sugarcane juice machine for mobile operations.',
          badge: 'Compact',
          specifications: [
            { key: 'Capacity', value: '300 glass/hr' },
            { key: 'Motor Power', value: '2 HP' },
            { key: 'Automation Grade', value: 'Automatic' },
            { key: 'Warranty', value: '1 Year' },
            { key: 'Material', value: 'SS 304' },
            { key: 'Usage/Application', value: 'Commercial' },
            { key: 'Number of Rollers', value: '3 Roller Mechanism' },
            { key: 'Weight', value: '50 KG' },
            { key: 'Design', value: 'Compact' },
            { key: 'Driven Type', value: 'Petrol Engine' },
            { key: 'Engine Power', value: '2 H.P.' },
            { key: 'Finishing Type', value: 'Polished' },
            { key: 'I Deal In', value: 'New Only' },
            { key: 'Country of Origin', value: 'Made in India' }
          ],
          features: [
            'Petrol engine powered',
            'Mobile operation capability',
            'Triple roller mechanism',
            'High capacity output',
            'Versatile usage'
          ]
        }
      ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
} 