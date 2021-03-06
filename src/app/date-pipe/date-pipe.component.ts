import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe',
})

export class DateformatPipe implements PipeTransform {
  transform(value: string) {
     var datePipe = new DatePipe("en-US");
      value = datePipe.transform(value, 'dd-MM-yyyy');
      return value;
  }
  }
  export class MonthformatPipe implements PipeTransform {    
    transform(value: string) {
       var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'MMM');
        return value;
    }
  }