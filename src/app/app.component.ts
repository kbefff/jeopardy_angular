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

  getDataFromService() {
    this.jeopardyService.getQuestionInfo()
      .subscribe(//like then in a promise
        questionInfo => {
          this.questionInfo = questionInfo[0];
          }
        )
    }

  ngOnInit(){
    this.getDataFromService();

  }
  
}
