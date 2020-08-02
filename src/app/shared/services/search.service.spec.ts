import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpRequest } from '@angular/common/http';


describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    // inject the service
    service = TestBed.get(SearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data via GET request', () => {
    const config = new HttpRequest(
      'GET',
      `https://itunes.apple.com/search?term=taylor&limit=50`,
      { responseType: 'json' }
    );

    service.searchTerm(config).subscribe(data => data);
    const req = httpMock.expectOne(`https://itunes.apple.com/search?term=taylor&limit=50`, 'call to api');
    expect(req.request.method).toBe('GET');
  });
  afterEach(() => {
    httpMock.verify();
});
});



