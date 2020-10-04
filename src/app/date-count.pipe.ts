import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): string {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    var dateDifference = Math.abs(value - todayWithNoTime); //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    var dayCounter = dateDifferenceSeconds / secondsInDay;
    var months = dayCounter / 28;
    var weeks = dayCounter / 7;
    var years = dayCounter / 365;

    if (years >= 1 && value < todayWithNoTime) {
      return Math.round(years) + ' year(s)';
    } else if (months >= 1 && value < todayWithNoTime) {
      return Math.round(months) + ' month(s)';
    } else if (weeks >= 1 && value < todayWithNoTime) {
      return Math.round(weeks) + ' week(s)';
    } else if (dayCounter >= 1 && value < todayWithNoTime) {
      return dayCounter + ' day(s)';
    }
  }

}
