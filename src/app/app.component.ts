import { Component } from '@angular/core';
import { CepService } from './cep.service';
import { Cep } from './cep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public retornoDoCep : Cep;

  public cepDigitadoPeloUsuario: String = "";

  constructor (public meuService: CepService ){}

  public buscarCep() {
   this.meuService.obterCep(this.cepDigitadoPeloUsuario)
    .subscribe(data => this.retornoDoCep = data)


  }
}
