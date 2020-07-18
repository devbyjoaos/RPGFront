import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { DaleComponent } from './dale.component';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { DaleService } from './services/dale.service';
import { DaleRoutingModule } from './dale-routing.module';

@NgModule({
  declarations: [
    DaleComponent
  ],
  imports: [
    ComponentsModule,
    DaleRoutingModule,
  ],
  providers: [DaleService,
  ],
})
export class DaleModule { }
