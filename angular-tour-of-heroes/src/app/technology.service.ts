import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
 
import { Technology } from '../model/technology';
import { TECHNOLOGIES } from '../model/mock-technologies';
import { MessageService } from './message.service';
 
@Injectable()
export class TechnologyService {
 
  constructor(private messageService: MessageService) { }
 
  getTechnologies(): Observable<Technology[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('TechnologyService: fetched technologies');
    return of(TECHNOLOGIES);
  }
}