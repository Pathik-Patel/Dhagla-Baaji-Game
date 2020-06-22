
//To store the cards of the player 1
var player1=[];         
//To store the cards of the player 2   
var player2=[];             
//To store the cards of the middle
var middle=[];             

//it stores the card which will go to the middle after pressing done. 
var remember_middle;        

//To chec the match case we need 3 (player1 and middle or player2 and middle 
//depending on turn) three cards so this 3 will store that 3 cards so that we can compare them
var player1_card;           
var player2_card;            
var midddle_card_1;
var midddle_card_2;         

//when this will false then and only u can press start.
//initially midddle has no card so at that time we cannot check match case so this will indicate.
//turn and done checks will used to enable and disable buttons situation wise.
var start_status=false;     
var end_status=false;       
var can_middle = false;     
var done1_status = false;   
var done2_status = false;   
var turn1_status = false;   
var turn2_status = false;   



//creates main arraycontaining 52 cards.
var main=[];
for(i=1;i<53;i++){
    main[i-1]=i;
}


//this function is used to check that whether match occurs or not with player 1's card
function match1()
{
    //if middle has no card then we cannot match with our card so this indicates that case.
    if(can_middle==false)
    {
        can_middle=true;
    }
    else{
        
        if((player1_card - midddle_card_2)%13 == 0 )
        {
            
            //sets middle to false as it has no cards now
            can_middle=false; 
            
            //gives the turn to player 1 
            turn1_status=true;
            turn2_status=false;

            //copy the middle cards to the player 1's cards
            for(i=0;i<middle.length;i++)
            {
                player1.push(middle[i]);
            }

            //makes middle empty
            middle = [];
            
            //adds the general image
            document.getElementById("middle-card").src=`images/0.png`;

            //check whether player 1 wins or not
            if(player2.length==0)
            {
                document.querySelector('#dhagla-baaji-result').textContent="Player 1 Won";
                turn1_status=false;
                turn2_status=false;
                done1_status=false;
                done2_status=false;
            }
        }
    }
}


//this function is used to check that whether match occurs or not with player 2's card
function match2()
{
    //if middle has no card then we cannot match with our card so this indicates that case.
    if(can_middle==false)
    {
        can_middle=true;
    }
    else{
        
        if((player2_card - midddle_card_1)%13 == 0 )
        {
            
            //gives again turn to the player 2
            turn1_status=false;
            turn2_status=true;
            
            //sets middle to false as it has no cards now
            can_middle=false;     
            
            //copy the middle cards to the player 1's cards
            for(i=0;i<middle.length;i++)
            {
                player2.push(middle[i]);
            }

            //makes middle empty
            middle = [];
    
            //adds general image
            document.getElementById("middle-card").src=`images/0.png`;
            
            //check whether player 2 wins or not
            if(player1.length==0)
            {
                document.querySelector('#dhagla-baaji-result').textContent="Player 2 Won";
                turn1_status=false;
                turn2_status=false;
                done1_status=false;
                done2_status=false;
            }

        }
    }
}




function turn1()
{

    if(turn1_status==true)
    {

        if(player1.length==0)
        {

            //gives equal number of cards to both the player and then shuffle them
            for(i=0;i<middle.length;i++)
            {
                
                if(i%2==0)
                {
                    player1.push(middle[i]);
                    player1 = shuffle(player1);
                }
                
                else
                {
                    player2.push(middle[i]);
                    player2 = shuffle(player2);
                }
            }
            
            //makes middle empty and disale to check matching
            middle=[];
            can_middle=false;
            
            //adds general image
            document.getElementById("middle-card").src=`images/0.png`;

            //create a random card on that div
            var index = Math.floor(Math.random(0,1)*player1.length);
            document.getElementById("your-card").src=`images/${player1[index]}.png`;

            //for match case and middle card
            remember_middle=player1[index];
            midddle_card_1=remember_middle;
            player1_card =  player1[index];
            
            //remove current card from player 1 array.
            player1.splice(index,1);

            done1_status=true;
            done2_status=false;
            turn1_status=false;

            document.querySelector('#opposite-dhagla-baaji-result').textContent=player2.length;
            document.querySelector('#your-dhagla-baaji-result').textContent=player1.length;
            document.querySelector('#middle-dhagla-baaji-result').textContent=middle.length;
                
        }
        else
        {

            //create a random card on that div
            var index = Math.floor(Math.random(0,1)*player1.length);
            document.getElementById("your-card").src=`images/${player1[index]}.png`;
            
            //for match case and middle card
            remember_middle=player1[index];
            midddle_card_1=remember_middle;
            player1_card =  player1[index];
            
            //remove current card from player 1 array.
            player1.splice(index,1);

            done1_status=true;
            done2_status=false;
            turn1_status=false;
        }
    }
}




function turn2()
{
    if(turn2_status==true)
    {
    
        if(player2.length==0)
        {
            
            //gives equal number of cards to both the player and then shuffle them
            for(i=0;i<middle.length;i++)
            {
                
                if(i%2==0)
                {
                    player1.push(middle[i]);
                    player1 = shuffle(player1);
                }
                
                else
                {
                    player2.push(middle[i]);
                    player2 = shuffle(player2);
                }
            }

            //makes middle empty and disale to check matching
            middle=[];
            can_middle = false;
            
            //adds general image
            document.getElementById("middle-card").src=`images/0.png`;
            
            //create a random card on that div
            var index = Math.floor(Math.random(0,1)*player2.length);
            document.getElementById("opposite-card").src=`images/${player2[index]}.png`;

            //for match case and middle card
            remember_middle=player2[index];
            midddle_card_2=remember_middle;
            player2_card =  player2[index];
            
            //remove current card from player 2 array.
            player2.splice(index,1);

            document.querySelector('#opposite-dhagla-baaji-result').textContent=player2.length;
            document.querySelector('#your-dhagla-baaji-result').textContent=player1.length;
            document.querySelector('#middle-dhagla-baaji-result').textContent=middle.length;

            done2_status=true;
            done1_status=false;
            turn2_status=false;
            
        }
        else
        {
            
            //create a random card on that div
            var index = Math.floor(Math.random(0,1)*player2.length);
            document.getElementById("opposite-card").src=`images/${player2[index]}.png`;
            
            //for match case and middle card
            remember_middle=player2[index];
            midddle_card_2=remember_middle;
            player2_card =  player2[index];
            
            //remove current card from player 2 array.
            player2.splice(index,1);

            done2_status=true;
            done1_status=false;
            turn2_status=false;
                
               
        }
    }
}




function done1()
{
    
    if(done1_status==true)
    {

    //puts the player 1 image to the middle div
    document.getElementById("middle-card").src=`images/${remember_middle}.png`;

    middle.push(remember_middle);
    midddle_card = remember_middle;

    //puts general card image in the player 1 div
    document.getElementById("your-card").src=`images/0.png`;
    
    turn1_status=false;
    turn2_status=true;

    match1();

    //update the number of cards in each divs.
    document.querySelector('#your-dhagla-baaji-result').textContent=player1.length;
    document.querySelector('#middle-dhagla-baaji-result').textContent=middle.length;

        done1_status=false;

    }
    

}



function done2()
{
    
    if(done2_status==true)
    {
        
    //puts the player 1 image to the middle div
    document.getElementById("middle-card").src=`images/${remember_middle}.png`;
    middle.push(remember_middle);
    midddle_card = remember_middle;
    
    //puts general card image in the player 2 div
    document.getElementById("opposite-card").src=`images/0.png`;
    turn2_status=false;
    turn1_status=true;

    match2();

    //update the number of cards in each divs.
    document.querySelector('#opposite-dhagla-baaji-result').textContent=player2.length;
    document.querySelector('#middle-dhagla-baaji-result').textContent=middle.length;

    done2_status=false;

    }
    
}



function shuffle(array) 
{
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) 
    {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


  

function start()
{

    //checks the start status to check that whether game is already started or not.
    if(start_status==false)
    {

        turn1_status=true;
        start_status=true;
        end_status = true;
        var temp = shuffle(main);
    
    for(i=0;i<26;i++)
    {
        player1[i]=temp[i];  //gives random 26 cards to the player 1 
    }
    
    for(i=26;i<52;i++)
    {
        player2[i-26]=temp[i];  //gives random 26 cards to the player 2 
    }

    }

    //update the number of cards in each divs.
    document.querySelector('#your-dhagla-baaji-result').textContent=player1.length;
    document.querySelector('#middle-dhagla-baaji-result').textContent=middle.length;
    document.querySelector('#opposite-dhagla-baaji-result').textContent=player2.length;
}





function end()
{
    
    if(end_status==true)
    {

        //makes each array empty
        player1 = [];
        player2 = [];
        middle = [];
        turn1_status=false;
        turn2_status=false;
        done1_status=false;
        done2_status=false;
    
        //puts general image in player 1 box
        document.getElementById("your-card").src=`images/0.png`;
        //puts general image in player middle box
        document.getElementById("middle-card").src=`images/0.png`;
        //puts general image in player 2 box
        document.getElementById("opposite-card").src=`images/0.png`;
    
        //update the number of cards in each divs.
        document.querySelector('#your-dhagla-baaji-result').textContent=player1.length;
        document.querySelector('#middle-dhagla-baaji-result').textContent=middle.length;
        document.querySelector('#opposite-dhagla-baaji-result').textContent=player2.length;
        document.querySelector('#dhagla-baaji-result').textContent="Lets Play.";

        //change the status of start to show that game is over.
        start_status=false;
    }
}

