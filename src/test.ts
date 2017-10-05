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

  constructor(private jeopardyService: JeopardyService) { }

  //method that uses the jeopardy service from the api
  getDataFromService() {
    this.jeopardyService.getQuestionInfo()
      .subscribe(
      questionInfo => {
        this.questionInfo = questionInfo[0];
        console.log(this.questionInfo.answer)
      }
      )
  }

  sampleMethod(someString: string) {
    alert(someString)
  }

  //call the api on loading of the component to get
  //initial data
  ngOnInit() {
    this.getDataFromService()
  }

}