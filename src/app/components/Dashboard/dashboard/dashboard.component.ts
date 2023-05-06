import { Component, OnInit, Output } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { navbarData } from './nav-data';
import {
	animate,
	keyframes,
	style,
	transition,
	trigger,
} from '@angular/animations';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
	collapsed = true;
	screeWidth: 0;
	navData = navbarData;
	// animations = [
	// 	trigger('fadeInOut', [
	// 		transition(':enter', [
	// 			style({ opacity: 0 }),
	// 			animate('350ms', style({ opacity: 1 })),
	// 		]),
	// 		transition(':leave', [
	// 			style({ opacity: 1 }),
	// 			animate('350ms', style({ opacity: 0 })),
	// 		]),
	// 	]),
	// 	trigger('rotate', [
	// 		transition(':enter', [
	// 			animate(
	// 				'1000ms',
	// 				keyframes([
	// 					style({ transform: 'rotate(0deg)', offset: '0' }),
	// 					style({ transform: 'rotate(1turn)', offset: '1' }),
	// 				])
	// 			),
	// 		]),
	// 	]),
	// ];

	toggleCollapse(): void {
		this.collapsed = !this.collapsed;
	}

	closeSidenav(): void {
		this.collapsed = false;
	}

	isAdministrador: boolean;
	constructor(private authGuard: AuthGuardService) {}

	ngOnInit(): void {
		this.isAdministrador = this.authGuard.VerificarAdministrador();
	}
}
