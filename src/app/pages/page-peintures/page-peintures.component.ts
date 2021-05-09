import { Component, OnInit } from '@angular/core';
import { PictureModel } from '../../ui-tools/photo-grid/picture-model';

@Component({
	selector: 'app-page-peintures',
	templateUrl: './page-peintures.component.html',
	styleUrls: ['./page-peintures.component.scss'],
})
export class PagePeinturesComponent implements OnInit {
	public drawings: PictureModel[] = [
		{ fileName: 'dessins/avatar.jpg', title: 'Avatar 1', description: '' },
		{ fileName: 'dessins/avatar.jpg', title: 'Avatar 2', description: '' },
		{ fileName: 'dessins/avatar.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/avatar.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/avatar.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/avatar.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/avatar.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/avatar.jpg', title: 'Titre', description: '' },
	];

	constructor() { }

	ngOnInit(): void {
	}
}
