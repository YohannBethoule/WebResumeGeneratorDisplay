import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FileService {
  public url = '';

  constructor(private http: HttpClient) {}

  downloadFile(): any {
      return this.http.get(this.url, {responseType: 'blob'});

  }

}
