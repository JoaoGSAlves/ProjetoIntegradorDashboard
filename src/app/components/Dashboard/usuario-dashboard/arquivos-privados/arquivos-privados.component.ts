import { Component, OnInit } from '@angular/core';
import { Recurso } from 'src/app/models/Recurso';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { RecursoService } from 'src/app/services/recurso.service';

@Component({
  selector: 'app-arquivos-privados',
  templateUrl: './arquivos-privados.component.html',
  styleUrls: ['./arquivos-privados.component.css']
})
export class ArquivosPrivadosComponent implements OnInit {

  recursos : Recurso[];
  idUsuarioLogado : string;

  constructor(
    private recursoService : RecursoService,
    private authGuardService: AuthGuardService
  ) { }

  ngOnInit(): void {
    this.idUsuarioLogado = this.authGuardService.getIdUsuarioLogado();

    this.recursoService.ObterRecursoPeloUsuarioId(this.idUsuarioLogado).subscribe(resultado=>{
      this.recursos = resultado;        
  }) 
  }

}
