var app = angular.module("scoreBoard",[]);

app.controller("homeCtrl", homeCtrl);

app.controller("TeamACtrl", TeamACtrl);
app.controller("TeamBCtrl", TeamBCtrl);
app.controller("BowlingCtrl", BowlingCtrl);
app.controller("BattingCtrl", BattingCtrl);

function homeCtrl(){
    console.log("Logged...!");
}

function TeamACtrl(){
    this.myTeam = [ {'name': "S Tendulkar"},
                    {'name': "V Sehwag"},
                    {'name': "V Kohli"},
                    {'name': "G Gambhir"},
                    {'name': "Y Sing"},
                    {'name': "M Dhoni (C & Wk)"},
                    {'name': "K Dev"},
                    {'name': "A Kumble"},
                    {'name': "H Sing"},
                    {'name': "J Srinath"},
                    {'name': "Z Khan"}];
}

function TeamBCtrl(){
    this.myTeam = [ {'name': "M Hayden"},
                    {'name': "G Christ (Wk)"},
                    {'name': "R Ponting (C)"},
                    {'name': "M Clark"},
                    {'name': "M Hussey"},
                    {'name': "M Bevan"},
                    {'name': "S Warne"},
                    {'name': "B Lee"},
                    {'name': "M Grath"},
                    {'name': "M Jonhson"},
                    {'name': "M Stark"}];
}

function BowlingCtrl() {
    // console.log("Please select a Bowler...!");
    this.bowler="";
    this.overDetails = function(runs, extras){
      this.runsScored = parseInt(runs);
      this.extraRun = extras;
      if (this.extraRun === 'NB') {
          this.runConcededOnNoBall =this.runsScored + 1;
          console.log("Runs scored with No-Ball!--> runs : " +this.runConcededOnNoBall);
          // console.log("this over details..! --> extras :" +1);
      } else if (this.extraRun === 'Wd') {
        this.runConcededOnWideBall =this.runsScored + 1;
          console.log("Runs scored on Wide delivery! --> extras :" +this.runConcededOnWideBall);
      } else if (this.extraRun === 'LB') {
          this.runConcededWithLegByes =this.runsScored;
          console.log("Runs scored runConcededWithLegByes()! --> extras :" +this.runConcededWithLegByes);
      }else if (this.extraRun === 'B') {
        this.runConcededWithByes =this.runsScored;
        console.log("Runs scored runConcededWithByes()! --> extras :" +this.runConcededWithByes);
      }else {
        console.log("Runs scored --> Runs :" +this.runsScored);
      }
    }

    this.overCompleted = function (){
        console.log('Please select another bowler..!');
        this.bowler=!this.bowler;
        // this.bowler=this.newBowler;
    }
  }

function BattingCtrl() {
    // console.log("Please select a Striker...!");
    this.striker="";
    // console.log("Please select a Non-Striker...!");
    this.nonStriker="";

    if((this.runsScored==="odd" && !this.lastBall)|| (this.runsScored==="even" && this.lastBall)) {
        this.striker = this.nonStriker;
    } else{
        this.striker = this.striker;
    }
}

function Batting(){

}
