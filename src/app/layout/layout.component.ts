import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  nameControl: FormControl;
  emailControl: FormControl;
  usernameControl: FormControl;

  nameForm: FormGroup;
  emailForm: FormGroup;
  usernameForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.usernameControl = new FormControl('', Validators.required);

    this.nameForm = this.fb.group({
      name: this.nameControl
    });

    this.emailForm = this.fb.group({
      email: this.emailControl
    });

    this.usernameForm = this.fb.group({
      username: this.usernameControl
    });
  }

  finishSteps(): void {
    console.log('finishSteps()');
  }
}
