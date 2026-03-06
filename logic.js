function tryAgainPlay ()
{
    let isSoundEnabled = true;

    function startGame ()
    {

             let show = document.getElementById( "showResult" );
            show.style.display = "none";
        // ------------------close items-------------------->



        let boxGreen = document.getElementById( "box_green" );
        let boxRed = document.getElementById( "box_red" );
        let boxYellow = document.getElementById( "box_yellow" );
        let boxBlue = document.getElementById( "box_blue" );

        // --------------------userFunction---------------->

        function changeUGreen ()
        {
            userCount++;
            if ( userCount <= computerCount )
            {
                userCode( "1" );
                everyCheck();
                box_green.classList.add( "glowGreen" );
                correctClick();
                setTimeout( removeGc, 500 );
                if ( userCount == computerCount )
                {
                    removeAllBg();
                    finalCheck();
                };
            };
        };
        function removeGc ()
        {
            box_green.classList.remove( "glowGreen" );
        };

        function changeURed ()
        {
            userCount++;
            if ( userCount <= computerCount )
            {
                userCode( "2" );
                everyCheck();
                box_red.classList.add( "glowRed" );
                  correctClick();
                setTimeout( removeRc, 500 );
                if ( userCount == computerCount )
                {
                    removeAllBg();
                    finalCheck();
                };
            }
        };
        function removeRc ()
        {
            box_red.classList.remove( "glowRed" );
        };

        function changeUYellow ()
        {
            userCount++;
            if ( userCount <= computerCount )
            {
                userCode( "3" );
                everyCheck();
                box_yellow.classList.add( "glowYellow" );
                  correctClick();
                setTimeout( removeYc, 500 );
                if ( userCount == computerCount )
                {
                    removeAllBg();
                    finalCheck();
                };
            }
        };
        function removeYc ()
        {
            box_yellow.classList.remove( "glowYellow" );
        };

        function changeUBlue ()
        {
            userCount++;
            if ( userCount <= computerCount )
            {
                userCode( "4" );
                everyCheck();
                box_blue.classList.add( "glowBlue" );
                  correctClick();
                setTimeout( removeBc, 500 );
                if ( userCount == computerCount )
                {
                    removeAllBg();
                    finalCheck();
                };
            }
        };
        function removeBc ()
        {
            box_blue.classList.remove( "glowBlue" );
        };

        // -------------------ComputerFunction----------->

        function changeGreen ()
        {
            return new Promise( ( a ) =>
            {
                // boxGreenAudio()
                setTimeout( () =>
                {
                    box_green.classList.add( "glowGreen" );
                    setTimeout( () =>
                    {
                        box_green.classList.remove( "glowGreen" );
                        a();

                    }, 500 );
                }, 100 );
            } );
        };

        function changeRed ()
        {
            return new Promise( ( b ) =>
            {
                // boxRedAudio();
                setTimeout( () =>
                {
                    box_red.classList.add( "glowRed" );
                    setTimeout( () =>
                    {
                        box_red.classList.remove( "glowRed" );
                        b();
                    }, 500 );
                }, 100 );
            } );
        };

        function changeYellow ()
        {
            return new Promise( ( c ) =>
            {
                // boxYellowAudio();
                setTimeout( () =>
                {
                    box_yellow.classList.add( "glowYellow" );
                    setTimeout( () =>
                    {
                        box_yellow.classList.remove( "glowYellow" );
                        c();
                    }, 500 );
                }, 100 );
            } );
        };

        function changeBlue ()
        {
            return new Promise( ( d ) =>
            {
                // boxBlueAudio();
                setTimeout( () =>
                {
                    box_blue.classList.add( "glowBlue" );
                    setTimeout( () =>
                    {
                        box_blue.classList.remove( "glowBlue" );
                        d();
                    }, 500 );
                }, 100 );
            } );
        };

        // ----------------RemoveUserPermissionFunction------------>

        function removeAllBg ()
        {
            headingSymon.classList.add("pcPlay");
            boxGreen.removeEventListener( "click", changeUGreen );
            boxRed.removeEventListener( "click", changeURed );
            boxYellow.removeEventListener( "click", changeUYellow );
            boxBlue.removeEventListener( "click", changeUBlue );
        };

        // -----------------AddUserPermissionFunction----------->

        function addAllBg ()
        {
            headingSymon.classList.remove("pcPlay");
            boxGreen.addEventListener( "click", changeUGreen );
            boxRed.addEventListener( "click", changeURed );
            boxYellow.addEventListener( "click", changeUYellow );
            boxBlue.addEventListener( "click", changeUBlue );
        };

        // --------------------PlayComputer------------->

        async function playBg ( num )
        {
            await delay();
            userCount = 0;
            removeAllBg();
            console.log( "playbg run" );
            userPassCount = 0;
            for ( let i = 0; i < num; i++ )
            {
                let optionsBox = [ "box_green", "box_red", "box_yellow", "box_blue" ];
                if ( i == num - 1 )
                {
                    let option = Math.floor( Math.random() * optionsBox.length );
                    passArray.push( option + 1 );
                }
                console.log( "Pass array " + passArray );
                let currentBox = optionsBox[ passArray[ i ] - 1 ];
                if ( currentBox == "box_green" )
                {
                    await changeGreen();
                } else if ( currentBox == "box_red" )
                {
                    await changeRed();
                } else if ( currentBox == "box_yellow" )
                {
                    await changeYellow();
                } else if ( currentBox == "box_blue" )
                {
                    await changeBlue();
                };
            };
            userPlay();
        };

        // -----------------------------delayEachFunction-------------->

        function delay ()
        {
            return new Promise( ( t ) =>
            {
                setTimeout( () =>
                {
                    t();
                }, 600 );

            } );
        };

        // -----------------------UserPlay--------------->

        function userPlay ()
        {
            addAllBg();
            userGameCode = "";
        };

        // -----------------UserCode---------------->

        function userCode ( a )
        {
            userGameCode += a;
            console.log( userGameCode );
        };

        // -----------------Code Check------------------>

        function finalCheck ()
        {
            console.log( "final check" );
            console.log( userGameCode, passArray );
            if ( userGameCode == passArray.join( "" ) )
            {
                computerCount++;
                userScore++;
                document.getElementById( "userScore" ).innerText = userScore;
                playBg( computerCount );
                levelCompleted();
            } else
            {
                console.log( "error find" );
                showTryAgain();
                if ( userScore > localStorage.getItem( 'High Score' ) )
                {
                    localStorage.setItem( 'High Score', userScore );
                }
                finalScore.innerText = userScore;
            }
        };
        // ------------------------------everyCheck----------------->
        function everyCheck ()
        {
            console.log( "every check" );
            console.log(userGameCode[userPassCount], passArray[ userPassCount ]);
            console.log( userGameCode, passArray, userPassCount );
            if ( userGameCode[ userPassCount ] == passArray[ userPassCount ] )
            {
                userPassCount++;
                console.log("valid");
            } else
            {
                console.log( "error find every" );
                showTryAgain();
                if ( userScore > localStorage.getItem( 'High Score' ) )
                {
                    localStorage.setItem( 'High Score', userScore );
                };
                document.getElementById("highScore").innerText=localStorage.getItem("High Score");
                finalScore.innerText = userScore;
            };
        };

        function showTryAgain ()
        {
            console.log( "show try" );
            let show = document.getElementById( "showResult" );
            show.style.display = "flex";
        }
        // -------------------------Start game---------------->


        let passArray = [];
        let computerCount = 1;
        let userCount = 0;
        let userPassCount = 0;
        let userScore = 0;
        let userGameCode = "";
        playBg( computerCount );
        document.getElementById( "userScore" ).innerText = userScore;
        let finalScore = document.getElementById( "finalScore" );
    };
    // ----------------------------wanted values-------------------->

    startGame();
    let finalScore = document.getElementById( "finalScore" );
    let pauseGame = document.getElementById( "pauseGame" );
    pauseGame.addEventListener( "click", pausePlay );
    let pauseMenu = document.getElementById( "pauseInShow" );
    let closePause = document.getElementById( "closeInPause" );
    closePause.addEventListener( "click", closePauseFun );
    let continueGame = document.getElementById( "btn_continue" );
    continueGame.addEventListener( "click", closePauseFun );
    
    // -----------------------------Pause Game--------------------->

    function pausePlay ()
    {
        pauseMenu.style.display = "flex";
    };
    function closePauseFun ()
    {
        pauseMenu.style.display = "none";
    };


    // -------------------------------soundOn---Off---------------->

    let musicOn = document.getElementById( "btn_soundOn" );
    let musicOff = document.getElementById( "btn_soundOff" );
    let soundOnIcon = document.getElementById( "volumeOn" );
    let soundOffIcon = document.getElementById( "volumeOff" );
    let clickAudio = document.getElementById( "clickAudio" );
    let levelCompleteAudio = document.getElementById( "levelCompleteAudio" );

    function setSoundState ( enabled )
    {
        isSoundEnabled = enabled;

        if ( enabled )
        {
            musicOn.style.display = "none";
            musicOff.style.display = "block";
            soundOffIcon.style.display = "none";
            soundOnIcon.style.display = "inline";
        } else
        {
            musicOn.style.display = "block";
            musicOff.style.display = "none";
            soundOffIcon.style.display = "inline";
            soundOnIcon.style.display = "none";

            // Immediately stop any currently playing audio when sound is turned off.
            clickAudio.pause();
            clickAudio.currentTime = 0;
            levelCompleteAudio.pause();
            levelCompleteAudio.currentTime = 0;
        }
    }

    musicOn.addEventListener( "click", onMusic );
    musicOff.addEventListener( "click", offMusic );
    soundOffIcon.addEventListener( "click", onMusic );
    soundOnIcon.addEventListener( "click", offMusic );

    function onMusic ()
    {
        setSoundState( true );
    }
    function offMusic ()
    {
        setSoundState( false );
    }

    // Sync UI with default state.
    setSoundState( true );

    // -------------------audios------------>

    function levelCompleted ()
    {
        // let levelComplete = document.getElementById( "levelCompleteAudio" );
        // if ( isSoundEnabled )
        // {
        //     levelComplete.play();
        // }
    }
    function correctClick(){
        if ( !isSoundEnabled )
        {
            return;
        }
        clickAudio.currentTime = 0;
        clickAudio.play();
    }
    // -------------------pc play-------------->
};
// let btnTryagain = document.getElementById( "tryAgain" );
// btnTryagain.addEventListener( "click", tryAgainPlay);
tryAgainPlay();