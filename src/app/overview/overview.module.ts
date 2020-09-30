import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { OverviewComponent } from './overview.component';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { OverviewService } from './services/overview.service';
import { DaleRoutingModule } from './overview-routing.module';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    OverviewComponent,
  ],
  imports: [
    ComponentsModule,
    DaleRoutingModule,
  ],
  providers: [OverviewService,
  ],
})
export class OverviewModule { }
