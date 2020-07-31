import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [SearchRoutingModule, SharedModule],
})
export class SearchModule {}
