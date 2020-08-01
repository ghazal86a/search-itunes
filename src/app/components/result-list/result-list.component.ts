import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { MatTabChangeEvent } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnChanges {
  @Input() term;
  result;
  songs;
  kinds = ['Song', 'Music Video', 'Movie', 'TV Show', 'Podcast']
  selectedIndex;
  constructor(private search: SearchService) { }

  // ngOnInit() {
  //   this.getDataforMedia('music');
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log('term in result component', this.term);
    this.term = changes.term.currentValue;
    this.getDataforMedia('music');
    this.selectedIndex = 0;
  }

  getDataforMedia(media) {
    const config = new HttpRequest(
      'GET',
      `https://itunes.apple.com/search?term=${this.term}&media=${media}&limit=50`,
      { responseType: 'json' }
    );
    if (this.term) {
      this.search.searchTerm(config).subscribe((data) => {
        if (data instanceof HttpResponse) {
          if (data.body) {
            this.result = data.body.results;
            console.log('result', this.result);
          }
        }
      });
    }
  }

  // setSongs() {
  //   console.log('tests', [...new Set(this.result.map(item => item))] );
  //   return this.songs = this.result;
  // }
	// movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
  onTabChange(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    console.log(tab);

    switch (tab) {
      case 'Song':
        this.getDataforMedia('music');
        break;
      case 'Music Video':
        this.getDataforMedia('musicVideo');
        break;
      case 'Movie':
        this.getDataforMedia('movie');
        break;
      case 'TV Show':
        this.getDataforMedia('tvShow');
        break;
      case 'Podcast':
        this.getDataforMedia('podcast');
        break;
      default:
        break;
    }
  }

  // setData() {
  //   this.kinds =  [...new Set(this.result.map(item => item.kind))];
  //   console.log('kinds:', this.kinds);
  //   console.log(this.result)
  // }

  // filterValuesByKind(kind) {
  //   console.log('here');

  //   const filteredByKind = this.result.filter(res => res.kind === kind);
  //   // console.log(filteredByKind)
  //   console.log([...new Set(filteredByKind.map(item => item))])
  //   return [...new Set(filteredByKind.map(item => item))]
  // }
}
