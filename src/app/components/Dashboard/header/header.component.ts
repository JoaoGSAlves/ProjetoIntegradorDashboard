import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	idUsuarioLogado: string;

	constructor(private authGuardService: AuthGuardService) {}

	ngOnInit(): void {
		this.idUsuarioLogado = this.authGuardService.getIdUsuarioLogado();
	}
}
