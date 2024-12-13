import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.interface';
import * as AOS from 'aos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }

  showProductDetails(product: Product) {
    this.selectedProduct = product;
  }

  closeProductDetails() {
    this.selectedProduct = null;
  }

  downloadBrochure() {
    const pdfUrl = 'assets/PDF/sugarcane_juice_machine.pdf';
    window.open(pdfUrl, '_blank');
  }
}