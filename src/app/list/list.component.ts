import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  skills: Array<string> = ['html', 'css', 'javascript', 'angular'];
  constructor() {}

  ngOnInit(): void {}
}
