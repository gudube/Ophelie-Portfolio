import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-biographie',
	templateUrl: './page-biographie.component.html',
	styleUrls: ['./page-biographie.component.scss'],
})
export class PageBiographieComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

	public items: string[] = ['/about/biographie/1.png', '/about/biographie/2.png', '/about/biographie/3.png'];
}
