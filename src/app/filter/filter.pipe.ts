import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  //pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    //console.log("Text", searchText);
    //console.log("items", items);
    if(!items) return [];
    if(!searchText) return items;
    
    return items.filter( it => {
        return it.includes(searchText);
    });
   } 
}