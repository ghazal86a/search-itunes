import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  /**
   * Form group for search field
   */
  searchControl: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);
  }
}
