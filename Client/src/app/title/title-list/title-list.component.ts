import { Component, OnInit } from '@angular/core';

import { TitleListService } from './title-list.service';
import { Title } from './../../models/Title';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {

  title = 'Títulos';
  selectedTitle: Title;

  public titles: Title[];

  constructor(
    private ListService: TitleListService,
  ) { }

  ngOnInit() {
    this.loadTitles();
  }

  selectTitle(title: Title): void {
    this.selectedTitle = title;
  }

  deselectTitle(): void {
    this.selectedTitle = null;
  }

  loadTitles(): void {
    this.ListService.getAll().subscribe(
      (titles: Title[]) => {
        this.titles = titles;
        const currentDate = new Date();
        this.titles.forEach(ti => {
          const fineValue = ti.fine * ti.originalValue;
          let interestValue = 0.0;
          ti.quota.forEach(q => {
            q.date = new Date(q.date);
            q.delayedDays = Math.floor(
              (Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
                - Date.UTC(q.date.getFullYear(), q.date.getMonth(), q.date.getDate())) / (1000 * 60 * 60 * 24)
            );
            interestValue += ((ti.interest / 30) * q.delayedDays * q.value);
          });
          ti.updatedValue = ti.originalValue + fineValue + interestValue;
        });
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
