import { Pipe, PipeTransform } from '@angular/core';
/*
 * Returns month in words
 * Usage: month:number | monthDisplay
*/
@Pipe({name: 'monthDisplay'})
export class MonthDisplayPipe implements PipeTransform {
    transform($month: number): string {
        let result = "";
        switch ($month) {
            case 0: 
                result = "January";
                break;
            case 1: 
                result = "February";
                break;
            case 2: 
                result = "March";
                break;
            case 3: 
                result = "April";
                break;
            case 4: 
                result = "May";
                break;
            case 5: 
                result = "June";
                break;
            case 6: 
                result = "July";
                break;
            case 7: 
                result = "August";
                break;
            case 8: 
                result = "September";
                break;
            case 9: 
                result = "October";
                break;
            case 10: 
                result = "November";
                break;
            case 11: 
                result = "December";
                break;
        }

        return result;
    }
}