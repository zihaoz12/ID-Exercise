import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { menuData } from 'src/mock/submenu.data';
import { Menu } from '../interface/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getMenu(): Observable<Menu[]>{
    return new Observable(observable =>
      observable.next(menuData)
    )
  }
}
