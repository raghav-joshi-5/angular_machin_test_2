import { Component, OnInit } from '@angular/core';
import { Icard } from '../model/cards';
import { postArr } from '../const/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  postCard: Array<Icard> = postArr;
  constructor() {}

  ngOnInit(): void {}
}
