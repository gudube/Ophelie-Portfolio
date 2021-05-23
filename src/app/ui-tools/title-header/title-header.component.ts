import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-title-header',
	templateUrl: './title-header.component.html',
	styleUrls: ['./title-header.component.scss'],
})
export class TitleHeaderComponent implements OnInit {
	@Input() public paddingBottomPic = '0';

	@Input() public backgroundFile = 'pied.jpeg';

	@Input() public title = 'O P H E L I E';

	constructor() { }

	ngOnInit(): void {
	}

	public scrollToBottom(): void {
		window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
	}
}
