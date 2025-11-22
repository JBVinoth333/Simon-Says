let main = document.getElementById( "userInterface" );
let btnHelp = document.getElementById( "help" );
let help = document.getElementById( "helpInfo" );
let backHelpToHome = document.getElementById( "back_Btn" );
backHelpToHome.addEventListener( "click", helpToHome );
btnHelp.addEventListener( "click", showHelp );


function showHelp ()
{
    main.style.display = "none";
    help.style.display = "block";
};

function helpToHome ()
{
    main.style.display = "block";
    help.style.display = "none";
};
let highScore = localStorage.getItem( "High Score" );
console.log( highScore );
let highScoreShow = document.getElementById( "finalScore" );
highScoreShow.innerText = highScore;

let btnHighScore = document.getElementById( "highScore" );
btnHighScore.addEventListener( "click", showHighScore );
let closeHighScore = document.getElementById( "closeInHighScore" );
closeHighScore.addEventListener( "click", closeScoreBoard );

function showHighScore ()
{
    let result = document.getElementById( "scoreBoard" );
    result.style.display = "flex";
}
function closeScoreBoard ()
{
    let result = document.getElementById( "scoreBoard" );
    result.style.display = "none";
}