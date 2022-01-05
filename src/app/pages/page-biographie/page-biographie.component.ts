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

	public items: string[] = ['/about/biographie/_DSC1704.jpg', '/about/biographie/_DSC1725.jpg', '/about/biographie/392472_10151113909179745_1157636471_n.jpg'];
}
