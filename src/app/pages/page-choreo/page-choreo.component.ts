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
		{ fileName: 'projets/etoiles', title: 'tenter de voir à nouveau les étoiles', subtitle: '', description: '' },
		{ fileName: 'projets/peut_etre', title: 'j\'habite quelque part dans un pull', subtitle: '', description: '' },
		{ fileName: 'projets/chambre', title: 'juste une impro un jour ordinaire', subtitle: '', description: '' },
		{ fileName: 'projets/cornes', title: 'Profites de l\'étrangeté du calme pour respirer', subtitle: '', description: '' },
		{ fileName: 'projets/fuir', title: 'lorsque l\'on veut fuir..', subtitle: '', description: '' },
		{ fileName: 'projets/peu_importe', title: 'peu importe', subtitle: '', description: '' },
		{ fileName: 'projets/murs_fondent', title: 'les murs fondent entre mes doigts lorsque je ferme les yeux', subtitle: '', description: '' },
		{ fileName: 'projets/sans_titre_6', title: 'Sans titre #6', subtitle: '', description: '' },
		{ fileName: 'projets/sans_titre_4', title: 'Sans titre #4', subtitle: '', description: '' },
	];

	constructor() { }

	ngOnInit(): void {
	}
}
