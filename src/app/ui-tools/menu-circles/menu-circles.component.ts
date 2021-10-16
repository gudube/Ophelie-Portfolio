import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu-circles',
	templateUrl: './menu-circles.component.html',
	styleUrls: ['./menu-circles.component.scss'],
})
export class MenuCirclesComponent implements OnInit {
	constructor() { }

	@Input()
	public small = false;

	ngOnInit(): void {
	}
}
