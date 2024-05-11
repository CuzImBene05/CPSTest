var counter = 0
var activeCounter = false; 

    function add(){
        counter = counter+1;
        document.querySelector("Counter").innerHTML = counter;


        if( counter == 10){
            document.querySelector("Counter").innerHTML.style.color = "red";
        }

        if(counter => 0)    {
            document.querySelector("button").innerHTML = "CLICK!";
        } 

        if(counter == 1 && activeCounter == false){

            activeCounter = true; 
            setTimeout(CalcCPS,5000);



        }

        function CalcCPS() {
            CPS = counter / 5;
            document.querySelector("CPS").innerHTML = CPS;
            counter = 0;
            activeCounter = false;
        }

             
    }

    
            
