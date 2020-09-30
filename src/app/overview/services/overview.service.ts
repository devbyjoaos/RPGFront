import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { LoginDto} from 'src/app/login/login-objects';





@Injectable({ providedIn: 'root' })
export class OverviewService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  public ver(): Observable<LoginDto> {
    return this.httpClient.get<LoginDto>('http://localhost:8080/login/v1/see');
  }

}
