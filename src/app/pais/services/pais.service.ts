import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = `https://restcountries.com/v3.1`;
  private filter: string = '?fields=name, capital, flags'

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name,capital,flags,population,cca2')
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    // .pipe(
    //   catchError(error => of([]))
    // );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCodigo(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/alpha/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
