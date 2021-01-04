import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Title } from 'src/app/models/Title';
import { TitleFormService } from './title-form.service';

@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.css']
})
export class TitleFormComponent implements OnInit {

  title = 'Adicionar título';
  titleForm: FormGroup;
  quotaValues: number[];
  postTitle: Title;
  quotaNumbers = 0;

  constructor(
    private fb: FormBuilder,
    private formService: TitleFormService,
    private router: Router,
    ) {
      this.createForm();
    }

    ngOnInit() { }

    createForm(): void {
      this.titleForm = this.fb.group({
        number: ['', Validators.required],
        interest: ['', Validators.required],
        fine: ['', Validators.required],
        originalValue: ['', Validators.required],
        obligator: this.fb.group({
          name: ['', Validators.required],
          cpf: ['', Validators.required]
        }),
        quota: this.fb.array([
          this.addQuotaFormGroup()
        ])
      });
    }

    saveTitle(title: Title) {
      title.fine /= 100;
      title.interest /= 100;
      title.quotaNumbers = this.quotaNumbers;
      this.formService.post(title).subscribe(
        (ti: Title) => {
          this.router.navigate([this.router.url.split(/\/(new)\/?/gi)[0]]);
        },
        (error: any) => {
          console.error(error);
        }
      );
    }

    titleSubmit() {
      this.saveTitle(this.titleForm.value);
    }

    addQuotaFormGroup(): FormGroup {
      this.quotaNumbers++;
      return this.fb.group({
        number: ['', Validators.required],
        value: ['', Validators.required],
        date: ['', Validators.required]
      });
    }

    addQuota(): void {
      (this.titleForm.get('quota') as FormArray).push(this.addQuotaFormGroup());
    }
  }
