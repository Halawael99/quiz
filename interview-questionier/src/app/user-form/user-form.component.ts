import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'pm-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  @ViewChild ('name') nameKey! :ElementRef;
  @ViewChild ('select') selectKey!:ElementRef;
  constructor(private questionService : QuestionService){

  }
  ngOnInit(): void {

  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    localStorage.setItem("select",this.selectKey.nativeElement.value);
    this.questionService.getQuizKey(this.selectKey.nativeElement.value);
    console.log(this.selectKey.nativeElement.value);
  }

}
