
// api url 


const apikey = '0bc0004f540d4de4855f145185f08a9d';
let topic= 'Sports';

const api_url =`http://newsapi.org/v2/everything?q=Sports&apiKey=${apikey}`;
//	"https://api.agify.io/?name=bella"; 

// Defining async function 
async function getapi(url) { 
    
    


	// Storing response 
    const response =await fetch(url);
      
 
    //await fetch(url); 
	
	// Storing data in form of JSON 
	var data = await response.json(); 
//	console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
       
          let tab =  ''; 
  
      for (var i=0;i<data.articles.length;i++) {

        tab += `<tr> <th>Author : </th><td> ${data.articles[i].author} </td> 
        </tr>`; 
        tab += `<tr> <th>Title : </th><td> ${data.articles[i].title} </td> 
        </tr>`; 
        tab += `<tr> <th>Description : </th><td> ${data.articles[i].description} </td> 
        </tr>`; 
        tab += `<tr> <th>Url : </th><td> <a href=${data.articles[i].url}>${data.articles[i].url} </a></td> 
        </tr>`; 

        tab += `<tr> <th>Url Image  : </th><td> <img src=${data.articles[i].urlToImage} width='150' height='100'></img></td> 
        </tr>`; 
        tab += `<tr><td>  <hr width="100%"> </td> </tr>`; 
      
        }
    


     // Setting innerHTML as tab variable 
     document.getElementById("employees").innerHTML = tab; 
 }
