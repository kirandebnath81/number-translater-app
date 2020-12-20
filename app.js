let inputText=document.querySelector(".textarea");
let btnPrimary=document.querySelector(".btn-primary");
let outputText=document.querySelector(".output")

btnPrimary.addEventListener("click",eventHandler)


function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
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
        .catch(errorHandler)
    }
    
    
    
     var url="https://api.funtranslations.com/translate/numbers.json"
    
    function urlConstructer(text){
        return url+"?text="+text
    }
