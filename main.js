
// api url 

const apikey = '78b9d599c4f94f8fa3afb1a5458928d6';

const api_url_tech =`http://newsapi.org/v2/everything?q=Technology&apiKey=${apikey}`;
const api_url_sports =`http://newsapi.org/v2/everything?q=Sports&apiKey=${apikey}`;
const api_url_entertainment =`http://newsapi.org/v2/everything?q=Entertainment&apiKey=${apikey}`;

function entertainmentFunction() {

    var sport = document.getElementById("sportDiv");
    sport.style.display = "none";

    var tech1 = document.getElementById("techDiv");
    tech1.style.display = "none";

    var x = document.getElementById("entDiv");
    if (x.style.display == "none" || x.style.display == "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    // Calling that async function 
    getApiEntertainment(api_url_entertainment); 

}
function SearchFunction() {
  
   var search =  document.getElementById("Search").value;
   var e = document.getElementById("category");
   var category = e.value;
 
   var searchcombination = search + ' And ' + category;

   const api_url_search =`http://newsapi.org/v2/everything?q=${searchcombination}&apiKey=${apikey}`;


   var sport = document.getElementById("sportDiv");
   sport.style.display = "none";
 
   var tech1 = document.getElementById("techDiv");
   tech1.style.display = "none";

    var entx = document.getElementById("entDiv");
    entx.style.display = "none";
 
    var y1 = document.getElementById("searchDiv");
    alert(y1.style.display);
    if (y1.style.display == "none" || y1.style.display == "") {
        y1.style.display = "block";
    } else {
        y1.style.display = "block";
    }
    
    // Calling that async function 
    getApiSearch(api_url_search); 


}

function sportFunction() {
 
    var ent = document.getElementById("entDiv");
    ent.style.display = "none";

    var tech = document.getElementById("techDiv");
    tech.style.display = "none";

    var z = document.getElementById("sportDiv");
    if (z.style.display == "none" || z.style.display == "") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
    // Calling that async function 
    getApiSports(api_url_sports); 
}

function techFunction() {
  
    var ent1 = document.getElementById("entDiv");
    ent1.style.display = "none";

    var sport1 = document.getElementById("sportDiv");
    sport1.style.display = "none";

    var y = document.getElementById("techDiv");
    if (y.style.display == "none" || y.style.display == "") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    // Calling that async function 
    getApiTech(api_url_tech); 
}

// Defining async function 
async function getApiEntertainment(url) { 
    
    // Storing response 
    const response =await fetch(url);

    // Storing data in form of JSON 
    var data = await response.json(); 

    console.log(data);

    showEnt(data); 
} 

async function getApiSports(url) { 
    
    // Storing response 
    const response =await fetch(url);
    
    // Storing data in form of JSON 
    var data = await response.json(); 

    console.log(data);

    showSports(data); 
}
 async function getApiSearch(url) { 
 
    // Storing response 
    const response =await fetch(url);
    
    // Storing data in form of JSON 
    var data = await response.json(); 

    console.log(data);

    showSearch(data); 
} 


async function getApiTech(url) { 
    
    // Storing response 
    const response =await fetch(url);
    
    // Storing data in form of JSON 
    var data = await response.json(); 

    console.log(data);

    showTech(data); 
} 
// Function to define innerHTML for HTML table 
function showTech(data) { 
       
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

        tab += `<tr> <th></th><td> <img src=${data.articles[i].urlToImage} width='150' height='100'></img></td> 
        </tr>`; 

        tab += `<tr> <th>Description : </th><td> ${data.articles[i].category}</td> 
        </tr>`; 

        tab += `<tr><td>  <hr width="100%"> </td> </tr>`; 

      
        }
     // Setting innerHTML as tab variable 
     document.getElementById("technologynews").innerHTML = tab; 
 }
 function showSearch(data) { 
       
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

        tab += `<tr> <th></th><td> <img src=${data.articles[i].urlToImage} width='150' height='100'></img></td> 
        </tr>`; 

        tab += `<tr> <th>Description : </th><td> ${data.articles[i].category}</td> 
        </tr>`; 

        tab += `<tr><td>  <hr width="100%"> </td> </tr>`; 

      
        }
     // Setting innerHTML as tab variable 
    
     document.getElementById("searchnews").innerHTML = tab; 
   
  
 }
 // Function to define innerHTML for HTML table 
function showEnt(data) { 
       
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

        tab += `<tr> <th></th><td> <img src=${data.articles[i].urlToImage} width='150' height='100'></img></td> 
        </tr>`; 
        tab += `<tr><td>  <hr width="100%"> </td> </tr>`; 

    }
        // Setting innerHTML as tab variable 
    document.getElementById("entertainmentnews").innerHTML = tab; 
    
}

// Function to define innerHTML for HTML table 
function showSports(data) { 
       
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

  tab += `<tr> <th></th><td> <img src=${data.articles[i].urlToImage} width='150' height='100'></img></td> 
  </tr>`; 
  tab += `<tr><td>  <hr width="100%"> </td> </tr>`; 

  }
// Setting innerHTML as tab variable 
document.getElementById("sportsnews").innerHTML = tab; 
}
