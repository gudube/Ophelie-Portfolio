import { Component, Input, OnInit } from '@angular/core';
import { SpotlightModel } from './spotlight-model';

@Component({
	selector: 'app-spotlight-item',
	templateUrl: './spotlight-item.component.html',
	styleUrls: ['./spotlight-item.component.scss'],
})
export class SpotlightItemComponent implements OnInit {
	@Input() public content: SpotlightModel = {
		fileName: '', title: '', subtitle: '', description: '',
	};

	constructor() { }

	ngOnInit(): void {
	}
}
