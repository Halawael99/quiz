import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  quizKey:string ='';

  constructor(private http :HttpClient ) { }
  getQuestionJson(){
    return this.http.get<any>(`assets/${this.quizKey}.json`);

  }

  getQuizKey(key:string){
    this.quizKey = key;
    console.log(this.quizKey)
  }

}
