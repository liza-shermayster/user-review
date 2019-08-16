import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
  createForm;

  constructor(private formBuilder: FormBuilder,) {
    this.createForm = this.formBuilder.group({
      name: '',
      comment: ''
    });
  }

  ngOnInit() {
  }
  onSubmit(data) {
    console.log(data);

  }

}
