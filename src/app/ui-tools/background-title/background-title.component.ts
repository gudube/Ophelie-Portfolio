import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-background-title',
	templateUrl: './background-title.component.html',
	styleUrls: ['./background-title.component.scss'],
})
export class BackgroundTitleComponent implements OnInit {
	@Input() public title = ''

	@Input() public smaller = false

	constructor() { }

	ngOnInit(): void {
	}
}
