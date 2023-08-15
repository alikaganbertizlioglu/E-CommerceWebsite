import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  readonly APIUrl = "https://localhost:7083";
  FormData!: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.FormData.value);
    

    this.http.post(this.APIUrl + '/addContactForm', this.FormData.value).subscribe(data => {
      alert(data);
    });
  }
}
