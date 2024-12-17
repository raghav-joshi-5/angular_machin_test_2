import { Component, OnInit } from '@angular/core';
import { Itable } from '../model/table';
import { products } from '../const/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  productArr: Array<Itable> = products;
  constructor() {}

  ngOnInit(): void {}
}
