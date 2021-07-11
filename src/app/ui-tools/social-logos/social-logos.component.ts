import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-social-logos',
	templateUrl: './social-logos.component.html',
	styleUrls: ['./social-logos.component.scss'],
})
export class SocialLogosComponent implements OnInit {
	@Input()
	public circles = false;

	constructor() { }

	ngOnInit(): void {
	}
}
