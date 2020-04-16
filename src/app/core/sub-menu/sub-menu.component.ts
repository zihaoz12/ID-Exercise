import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  menuList: any;

  constructor(
    private menuService: MenuService
  ) { }

  showSubmenu(i) {
    console.log('show');
    this.menuList = this.menuList.map((menu, index) => {
      if (i === index) {
        menu.showSub = true;
      }
      return menu;
    });
  }
  hideSubmenu(i) {
    this.menuList = this.menuList.map((menu, index) => {
      if (i === index) {
        menu.showSub = false;
      }
      return menu;
    });
  }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data) => {
      this.menuList = data.map((menu) => {
        return {...menu, showSub: false};
      });
    });
  }

}
