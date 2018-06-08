import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform {

  transform(time: number, args?: any): any {
    if (!time) {
      return;
    }

    let now = moment().valueOf();
    let diff = now - time;

    let seconds = moment.utc(diff).get('seconds')
    let minutes = moment.utc(diff).get('minutes')
    let hours = moment.utc(diff).get('hours');

    let answer = `Последние изменения были ${hours} часов ${minutes} минут ${seconds} секунд назад`;

    return answer;
  }

}
