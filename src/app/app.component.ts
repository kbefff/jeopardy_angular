import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  questionInfo;

  constructor(private jeopardyService: JeopardyService) {}

  getDataFromService(category) {
    console.log(category);
    this.jeopardyService.getQuestionInfo(category)
      .subscribe(//like then in a promise
        questionInfo => {
          this.questionInfo = questionInfo[0];
          }
        )
    }

  ngOnInit(){
    let seinfeld: string = "http://jservice.io/api/clues?count=5&category=12050";
    let harrisonFord: string = "http://jservice.io/api/clues?count=5&category=7835";
    let looneyTunes: string = "http://jservice.io/api/clues?count=5&category=360";
    // console.log(seinfeld);
    this.getDataFromService(seinfeld);


  }
  
}
