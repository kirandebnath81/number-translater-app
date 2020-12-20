let inputText=document.querySelector(".textarea");
let btnPrimary=document.querySelector(".btn-primary");
let outputText=document.querySelector(".output")

btnPrimary.addEventListener("click",eventHandler)


// if(inputText.value===""){
// alert('Enter some text')
// else{
    function eventHandler(){
        let userInput=inputText.value
    
        
        fetch(urlConstructer(userInput))
        .then(response => response.json())
        .then(json => {
            outputText.innerText=json.contents.translated;
        })
    }
    
    
    
     var url="https://api.funtranslations.com/translate/numbers.json"
    
    function urlConstructer(text){
        return url+"?text="+text
    }
