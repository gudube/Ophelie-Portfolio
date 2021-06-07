import { Component, Input, OnInit } from '@angular/core';
import { SpotlightModel } from '../spotlight-item/spotlight-model';

@Component({
	selector: 'app-spotlight-list',
	templateUrl: './spotlight-list.component.html',
	styleUrls: ['./spotlight-list.component.scss'],
})
export class SpotlightListComponent implements OnInit {
	@Input() public items: SpotlightModel[] = [];

	constructor() { }

	ngOnInit(): void {
	}
}
