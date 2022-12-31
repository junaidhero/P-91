player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
     var input1 = document.getElementById("Number1").value
     var input2 = document.getElementById("Number2").value
     result = input1*input2

     question_number = "<h4 id='question_number'> Q. "+input1+"x"+input2+"</h4>";
     input_box = "<br> Answer : <input type='text' id='input_check_box'> " ;
     check_button = "<br><br><button = class='btn btn-info' onclick='check()'>CHECK</button>";
     row = question_number + input_box + check_button;
     document.getElementById("output").innerHTML = row
     document.getElementById("Number1").innerHTML = ""
     document.getElementById("Number2").innerHTML = ""

}

var answer_turn = "player2";
var question_turn = "player1";

function check(){

     answer = document.getElementById("input_check_box").value;
     if(answer == result)
     {
          if(answer_turn == "player1")
          {
               player1_score = player1_score + 1;
               document.getElementById("player1_score").innerHTML=player1_score;
          }
          else
          {
               player2_score = player2_score + 1 ;
               document.getElementById("player2_score").innerHTML = player2_score;
          }
     }

     if(question_turn == "player1")
{
     question_turn = "player2"
     document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
}
else
{
     question_turn = "player1"
     document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name
}
if(answer_turn == "player1")
{
     answer_turn = "player2"
     document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
}
else
{
     answer_turn = "player1"
     document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name
}


document.getElementById("output").innerHTML = "";


}

