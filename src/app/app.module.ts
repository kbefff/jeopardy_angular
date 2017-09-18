import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JeopardyService } from './jeopardy.service';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { SeinfeldComponent } from './seinfeld/seinfeld.component';
import { HarrisonFordComponent } from './harrison-ford/harrison-ford.component';
import { CartoonsComponent } from './cartoons/cartoons.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    SeinfeldComponent,
    HarrisonFordComponent,
    CartoonsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
