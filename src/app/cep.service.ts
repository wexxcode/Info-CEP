import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CepService {

  constructor(public http: Http) {}

  public obterCep(cep :String): Observable<any>{
    return this.http.get('https://viacep.com.br/ws/'+cep+'/json/')
              .map(data => data.json());
  }
}
