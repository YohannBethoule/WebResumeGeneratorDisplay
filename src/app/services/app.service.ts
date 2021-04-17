import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dataSubject = new Subject<any[]>();

  public data: any = {};
  public urlParameter!: string | null;

  getData(): Observable<any>{
    console.log(this.urlParameter);
    return this.httpClient.get<any[]>('http://localhost:8000/api/site/' + this.urlParameter);
  }

  constructor(private httpClient: HttpClient){ }
}
