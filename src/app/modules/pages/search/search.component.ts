import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';

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
  term;

  constructor(private fb: FormBuilder, private search: SearchService) {}

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);
  }

  onSubmit() {
    // this.search.searchTerm().subscribe((response: Response) => {
    // this.result = response;
    // console.log('after http', this.result)
    // console.log('seachterm from form: ', this.searchControl)
    this.term = this.searchControl.value;
    console.log("term in search component", this.term);
    
    };
  
}
