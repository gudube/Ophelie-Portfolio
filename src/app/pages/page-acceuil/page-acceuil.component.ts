import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-acceuil',
	templateUrl: './page-acceuil.component.html',
	styleUrls: ['./page-acceuil.component.scss'],
})
export class PageAcceuilComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

	public scrollDown(): void {
		const offset = document.getElementById('main-content')?.offsetTop;
		if (offset) {
			window.scrollTo({ top: offset - 60, behavior: 'smooth' });
		}
	}
}
