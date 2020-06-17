import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { User, UserScore, Decision} from '../../models/models';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

 constructor(private gameService: GameService) { }


  score: number = 0;
  user: User;
  users: User[] = [];



  disableButtons: boolean  = false
  HigherLower: any[]
  count: number = 0;
  totalCount: number = 0;
  successful: boolean;
  selectedItem: string;
  oldRandomNumber: number;
  newRandomNumber: number;
  storeRandomNumbers: number[] = [];
  stop: boolean = false;
  decision: Decision[];
  timerId: any;

  started: boolean = false
  timeStart: Date;
  timeEnd: Date;
  totalTime: number
  gameFinished: boolean = false
  listArray: any;
  saveduserScoreList: UserScore[];
  scoreList: UserScore[];
  userScoreSaved: boolean = false;


  timeCompleted: number[] =[];

  ngOnInit() {
    this.decision = [
      { name: 'Lower' },
      { name: 'Higher' },
    ]

   
  };

  getRandom() {

    //start the timer
    if (!this.started) {
      this.timeStart = new Date();
      console.log('in timer start');
      this.started = true;
    }

    //generate random number not in array
    this.oldRandomNumber = this.getNum();
    this.newRandomNumber = this.getNum();

    //add the old RandomNumber to the list to the list
    this.storeRandomNumbers.push(this.oldRandomNumber);
    //empty arrayat 100
    if (this.storeRandomNumbers.length = 101) {
      this.storeRandomNumbers = [];
    }
  }


  select() {
    this.successful = false;
    this.totalCount = 0;

    let higherOrLower = this.decision.find(x => x.name === this.selectedItem).name;


    if (higherOrLower === 'Higher') {
      if (this.newRandomNumber > this.oldRandomNumber) {
        this.score += 1;
        this.successful = true
      }
      else {
        this.score = 0;
        this.successful = false;
        this.disableButtons = true;
        this.gameFinished = true;
      }
    }


    if (higherOrLower == 'Lower') {
      if (this.newRandomNumber < this.oldRandomNumber) {
        this.score += 1;
        this.successful = true;
      }
      else {
        this.score = 0;
        this.successful = false;
        this.disableButtons = true;
        this.gameFinished = true;
      }
    }

    if (this.score == 10) {

      this.disableButtons = true
      this.gameFinished = true;
      this.score = 10;

      this.timeEnd = new Date();
      this.totalTime = this.timeEnd.getTime() - this.timeStart.getTime()

      var userScore = new UserScore;

      userScore.TimeCompleted = this.totalTime;
      userScore.Date = new Date();

      this.user = new User;
      this.user.UserName = "Player 1"
      this.user.UserScores.push(userScore);

      //save user score
      if (this.userScoreSaved == false) {
        this.gameSaveSuccessfull();
        this.userScoreSaved = true;
      }

    }

  }



  newGame() {
   this.score = 0;
   this.totalTime = 0;
   this.started = false;
   this.gameFinished = false;
   this.oldRandomNumber = 0;
   this.userScoreSaved = false;
   this.disableButtons = false;
   this.storeRandomNumbers = [];
  }




getNum() {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  if (this.storeRandomNumbers.includes(randomNum)) {
    return this.getNum()
  }
  return randomNum
}


  usersSaved(Users) {
    return Users
  }


  gameSaveSuccessfull() {
    //save the Users winning game and return a list of users to show the pantheon
    this.gameService.SaveUserScore(this.user).subscribe(
      result => {
        this.saveduserScoreList = new Array();

        this.saveduserScoreList = result;

        this.saveduserScoreList.sort((a, b) => b.TimeCompleted - a.TimeCompleted);


        console.log(this.saveduserScoreList);
      });
  };


  }

