let text = document.getElementById("textarea")
let buttons = document.querySelectorAll("button")

let string =""

const operator =["/","*","-","=","+","%"]

buttons.forEach(button =>{
    button.addEventListener("click", (e) =>{
        let btnval= e.target.innerText

        if(btnval === "="){
            string = eval(string.replace("%","/100"));
            text.innerText=string
        }
        else if( btnval =="AC"){
            string = ""
            
        }else if(btnval == "DEL"){
            string= string.slice(0,-1)

        }
        else if(operator.includes(btnval)){
            let lastval= string.slice(-1)
            if(operator.includes(lastval)){
              string=string.slice(0,-1) +btnval;
                
            }
            else{
                string+=btnval
            }
        }
        else{
            string+=btnval
        }
        
        text.innerText=string
    })
})



 
 