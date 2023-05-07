import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  usuario : Usuario
  idUsuarioLogado : string;

  constructor(
    private usuarioService : UsuariosService,
    private authGuardService: AuthGuardService
    ) { }

  ngOnInit(): void {
    this.idUsuarioLogado = this.authGuardService.getIdUsuarioLogado();

    this.usuarioService.ObterUsuarioPorId(this.idUsuarioLogado).subscribe(resultado=>{
      this.usuario = resultado;
    })
  }

  getImage(baseImage:string) : any{

    let objectURL = 'data:image/png;base64,' + atob(baseImage);
    return objectURL;
  }

}

