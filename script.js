


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c3bf5a1d2cmsh61bf730ed3dfa8dp13d55ejsnfc3a82abe461',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    	}
};

function wordmeaning(word){
fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term='+word, options)
	.then(response => response.json())
	.then(response =>{
      
        for (i = 0; i < response.list.length; i++){
            
            
                para.innerHTML+=response.list[i].definition+"<hr>";
                


         }
      
    })
	.catch(err => console.error(err));
    
  setTimeout(hide,2450)
}


Search.addEventListener('click',(e)=>{
    e.preventDefault();
    para.innerHTML="";
    wordmeaning(floatingInput.value);

})


function hide()
{
    let b= document.getElementById("param")
  
    b.hidden= false
}

