import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit{
  /**
   * Form group for search field
   */
  searchControl: FormControl;
  term;

  constructor(private fb: FormBuilder, private search: SearchService) {}

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);
  }

  onSubmit() {
    this.term = this.searchControl.value;
    }
}
