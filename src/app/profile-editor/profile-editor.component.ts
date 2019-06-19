import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CkFinder } from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public Editor = ClassicEditor;

  profileForm = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['', [Validators.minLength(4), Validators.maxLength(5)]]
    }),
    image: [''],
    desc: ['']
  });

  ngOnInit() {
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get zip() {
    return this.profileForm.get('address').get('zip');
  }

  updateProfile() {
    this.profileForm.patchValue({
      name: 'King fisher',
      email: 'email@email.com',
      password: '12345678',
      address: {
        city: 'Cần Thơ'
      }
    });
  }

  updateDesc(desc: string) {
    this.profileForm.get('desc').setValue(desc);
  }

  onSubmit() {
  }

}
