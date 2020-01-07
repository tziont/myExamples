
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { IFruet } from '../../shared/interfaces/fruet-interface';

@Component({
  selector: 'example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent {
myData$: Observable<IFruet[]>;
color: Observable<IFruet[]>;
dataFromService = this.httpRequestService.getData();

  constructor(private httpRequestService: HttpRequestService) { }
  getData() {
    this.myData$ = this.dataFromService;
  }
  getGreen() {
    this.myData$ = this.dataFromService.pipe(map(res => res.filter(item => item.color === 'Green')));
  }

}
