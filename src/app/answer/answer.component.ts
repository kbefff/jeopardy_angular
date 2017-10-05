import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Output()
    updateQuestion = new EventEmitter<any>();

  @Input() questionInfo;
    answerValue=null;
    isCorrect: boolean;
    score=0;

ngOnInit() { }



onSubmit(){
  //case insensitive
  if(this.answerValue!=null && (this.answerValue.toLowerCase() == this.questionInfo.answer.toLowerCase()) ) {
    this.score += this.questionInfo.value;
       this.answerValue = "";
    this.updateQuestion.emit();
      return this.isCorrect = true;
  } else {
    this.answerValue = "";
    this.updateQuestion.emit();
      return this.isCorrect = false;
  }
}

}
