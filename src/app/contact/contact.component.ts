import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  profileForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['',  [Validators.required, Validators.email]],
      phone: ['',  Validators.required],
      message: ['',  Validators.required]
    })
  }

  validate() {
    console.log('Validated', this.profileForm);
  }

}
