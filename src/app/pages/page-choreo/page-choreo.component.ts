import { Component, OnInit } from '@angular/core';
import { SpotlightModel } from 'src/app/ui-tools/spotlight-item/spotlight-model';

@Component({
	selector: 'app-page-choreo',
	templateUrl: './page-choreo.component.html',
	styleUrls: ['./page-choreo.component.scss'],
})
export class PageChoreoComponent implements OnInit {
	// fileName: corresponds au fichier dans le dossier assets/. Doit être .jpg et/ou .webp
	// title: Titre qui apparait sur l'image
	// subtitle: facultatif (peut être vide avec ''). ajoute du texte en plus petit sous le titre
	// description: description visible lorsqu'on clique sur l'image
	public projets: SpotlightModel[] = [
		{ fileName: 'projets/example', title: 'Avatar 1', subtitle: '', description: '' },
		{ fileName: 'projets/example', title: 'Avatar 2', subtitle: '', description: '' },
		{ fileName: 'projets/example', title: 'Titre', subtitle: '', description: '' },
		{ fileName: 'projets/example', title: 'Titre', subtitle: '', description: '' },
		{ fileName: 'projets/example', title: 'Titre', subtitle: '', description: '' },
	];

	constructor() { }

	ngOnInit(): void {
	}
}
