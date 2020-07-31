import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { HistoryRoutingModule } from './history-routing.module';

import { HistoryComponent } from './history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [HistoryRoutingModule, SharedModule],
})
export class HistoryModule {}
