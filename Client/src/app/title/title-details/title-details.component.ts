import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Title } from './../../models/Title';
import { TitleDetailsService } from './title-details.service';

@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.component.html',
  styleUrls: ['./title-details.component.css']
})
export class TitleDetailsComponent implements OnInit {

  title = 'Detalhes do Título';
  selectedTitle: Title;
  lateDays = 0;

  constructor(
    private route: ActivatedRoute,
    private ListService: TitleDetailsService,
  ) {
  }

  ngOnInit() {
    this.loadTitleDetails(this.route.snapshot.params['id']);
  }

  loadTitleDetails(id: number): void {
    this.ListService.getById(id).subscribe(
      (title: Title) => {
        this.selectedTitle = title;
        const currentDate = new Date();
        const fineValue = this.selectedTitle.fine * this.selectedTitle.originalValue;
        let interestValue = 0.0;
        this.selectedTitle.quota.forEach(q => {
          q.date = new Date(q.date);
          q.delayedDays = Math.floor(
            (Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
              - Date.UTC(q.date.getFullYear(), q.date.getMonth(), q.date.getDate())) / (1000 * 60 * 60 * 24)
          );
          if (this.lateDays < q.delayedDays) { this.lateDays = q.delayedDays; }
          interestValue += ((this.selectedTitle.interest / 30) * q.delayedDays * q.value);
        });
        this.selectedTitle.updatedValue = this.selectedTitle.originalValue + fineValue + interestValue;
        this.selectedTitle.fine *= 100;
        this.selectedTitle.interest *= 100;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
