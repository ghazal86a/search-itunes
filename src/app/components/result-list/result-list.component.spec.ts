import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ResultListComponent } from './result-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from 'src/app/shared/services/search.service';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;

  let searchServiceSpy: jasmine.Spy;
  const searchService = jasmine.createSpyObj('searchService', ['searchTerm']);
  searchServiceSpy = searchService.searchTerm.and.returnValue(of(new HttpResponse(
    {body:
      {results: [{
      artistId: 909253,
      artistName: 'Jack Johnson',
      artworkUrl100: '',
      collectionName: 'On and On',
      collectionPrice: 7.99,
      kind: 'song',
      trackName: 'Taylor',
      trackPrice: 1.29,
      wrapperType: 'track'
    }]
    }
  }
  ))
 );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListComponent ],
      imports: [ HttpClientTestingModule],
      providers: [{
        provide: SearchService,
        useValue: searchService
      },
    ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the term we are searching for', () => {
    component.term = 'blah blah';
    fixture.detectChanges();

    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('blah blah');
  });

  it('tile values are populated correclty', fakeAsync(() => {

    component.term = 'blah blah';
    fixture.detectChanges();

    // trigger a http call
    component.getDataforMedia('music');
    fixture.detectChanges();
    tick();

    // first 4 tiles are for headers [0-3]
    const img = fixture.nativeElement.querySelectorAll('mat-grid-tile')[4];
    const name = fixture.nativeElement.querySelectorAll('mat-grid-tile')[5];
    const album = fixture.nativeElement.querySelectorAll('mat-grid-tile')[6];
    const artist = fixture.nativeElement.querySelectorAll('mat-grid-tile')[7];
    const price = fixture.nativeElement.querySelectorAll('mat-grid-tile')[8];

    expect(img.textContent).toEqual('');
    expect(name.textContent).toEqual('Taylor');
    expect(album.textContent).toEqual('On and On');
    expect(artist.textContent).toEqual('Jack Johnson');
    expect(price.textContent).toEqual('$1.29');
  }));
});
