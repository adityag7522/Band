var buttoncolor = ["red", "blue", "yellow", "green"];
var userclickpattern = [];
var pattern = [];

var level = 0;

function playsound (clik) {
    var au = new Audio("sounds/" + clik + ".mp3");
    au.play();
}

var c= 0;
$(".btn").click(function () {
    var uclick = $(this).attr("id");
    // console.log(uclick);
    c++;
    animatepress(uclick);
    playsound(uclick);
    userclickpattern.push(uclick);
    // console.log(userclickpattern);
    if(c==level){ checkanswer(level);
    c=0;
    }
    
})

$(document).keypress(function(event) {
    newsequence();
    level ++;
    $("h1").text("Level " + level);
})

function animatepress(press) {
    $("." + press).addClass("pressed");
    setTimeout(function(){
        $("." + press).removeClass("pressed");
    },100);
}

function newsequence() {
    // alert("Hiiiii");
    var choice = Math.random();
    var choice = Math.floor(choice * 4);
    // console.log(choice);
    var randomcolor = buttoncolor[choice];

    pattern.push(randomcolor);

    $("." + randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomcolor);
    userclickpattern = [];
    level++;
    $("h1").text("Level " + level);
}

function gameover() {
    
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },300);
        playsound("wrong");
        
//     while(gameover) {
//         level++;
//         $("h1").text("Level " + level);
//         newsequence();
//         userclickpattern = [];
//     }
}
var ans = true;

function checkanswer(Lev) {
    console.log(userclickpattern);
    console.log(pattern);

    for(var i=0;i<Lev;i++)
    {
        if(userclickpattern[i] != pattern[i]) {
            ans = false;
            gameover();
        }
    }
    level++;
    newsequence();
}
