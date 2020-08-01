import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SearchComponent } from './search.component';
import { ResultListComponent } from 'src/app/components/result-list/result-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchComponent, ResultListComponent],
  imports: [SearchRoutingModule, SharedModule, CommonModule],
})
export class SearchModule {}
