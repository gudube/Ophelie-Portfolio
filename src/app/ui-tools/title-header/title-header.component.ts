import {
	Component, HostListener, Input, OnInit,
} from '@angular/core';

@Component({
	selector: 'app-title-header',
	templateUrl: './title-header.component.html',
	styleUrls: ['./title-header.component.scss'],
})
export class TitleHeaderComponent implements OnInit {
	@Input() public paddingBottomPic = '0';

	@Input() public backgroundFile = 'pied.jpeg';

	@Input() public title = 'O P H E L I E';

	@Input() public accentColor = true;

	public showDownArrow = true;

	constructor() { }

	ngOnInit(): void {
	}

	public scrollToBottom(): void {
		if (this.showDownArrow) {
			window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
		}
	}

	@HostListener('window:scroll', [])
	private onWindowScroll(): void {
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop
			|| document.body.scrollTop || 0;
		this.showDownArrow = currentScroll < window.innerHeight / 4;
	}
}
