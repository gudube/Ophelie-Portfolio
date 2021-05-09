import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-background',
	templateUrl: './page-background.component.html',
	styleUrls: ['./page-background.component.scss'],
})
export class PageBackgroundComponent implements OnInit {
	@Input() public backgroundFile = 'background.jpg';

	constructor() { }

	ngOnInit(): void {
	}
}
