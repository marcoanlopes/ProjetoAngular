import { Component, OnInit } from '@angular/core';
import { products } from '../../../products';


@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
