import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnChanges {
  @Input() term;
  result;
  kinds;
  songs;

  constructor(private search: SearchService) { }

  ngOnChanges(changes: SimpleChanges) {

    const config = new HttpRequest(
      'GET',
      `https://itunes.apple.com/search?term=${changes.term.currentValue}&limit=1000`,
      { responseType: 'json' }
    );
    console.log('term in result component', this.term);

    if (changes.term.currentValue) {
      this.search.searchTerm(config).subscribe((data) => {
        if (data instanceof HttpResponse) {
          if (data.body) {
            this.result = data.body.results;
            this.setData();
            console.log("result", this.result)
          }
        }
      });
    }



  }

  setData() {
    this.kinds =  [...new Set(this.result.map(item => item.kind))];
    console.log('kinds:', this.kinds);
    console.log(this.result)
  }

  filterValuesByKind(kind) {
    console.log('here');
    
    const filteredByKind = this.result.filter(res => res.kind === kind);
    // console.log(filteredByKind)
    console.log([...new Set(filteredByKind.map(item => item))])
    return [...new Set(filteredByKind.map(item => item))]
  }
}
