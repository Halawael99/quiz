import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';
@Component({
  selector: 'pm-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  public name: string = "";
  public select: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 45;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted:boolean=false;
  constructor(private questionService: QuestionService) {

  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.select = localStorage.getItem("select")!;
    this.getAllQuestions();
    this.startCounter();

  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
        

        const shuffled = this.questionList.map((value:any) => ({value , sort :   Math.random()}))
        .sort((a : any,b: any)=> a.sort - b.sort)
        .map(({value}: any)=>value)
        this.questionList=shuffled
      })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {
    if(currentQno==5)
    {
      this.isQuizCompleted=true;
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
      this.currentQuestion++;
      this.resetCounter(); this.getProgressPercent();
      }, 1000);


    }
    else {
      setTimeout(() => {
      this.currentQuestion++;
      this.inCorrectAnswer++;
      this.resetCounter();
      this.getProgressPercent();},1000);
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter == 0) {
          this.currentQuestion++;
          this.counter = 45;
        }

      });
    setTimeout(() => {
      this.interval$.unsubscribe();

    }, 60000);

  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 45;
    this.startCounter();
  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / 5) * 100).toString();
    return this.progress;
  }

}
