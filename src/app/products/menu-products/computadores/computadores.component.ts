import { Component, OnInit } from '@angular/core';
import { products } from '../../../products';
@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css']
})
export class ComputadoresComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
