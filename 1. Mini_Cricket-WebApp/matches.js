// write js code here corresponding to matches.html

var matches = JSON.parse(localStorage.getItem("schedule"));

var favou = JSON.parse(localStorage.getItem("favourites")) || [];

window.addEventListener("load" , function (){
    displayData(matches)
});

document.querySelector("#filterVenue").addEventListener("change" , filterVenue);

function filterVenue(){
    var selected = document.querySelector("#filterVenue").value;

    var filterlist = matches.filter(function (elem){
        return elem.venue == selected
    })

    displayData((filterlist))
}

function displayData(matches){
    document.querySelector("tbody").innerHTML ="";
    matches.map(function (elem){

        var row = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchNum;
       
        var td2 = document.createElement("td")
        td2.innerText = elem.teamA;
         
        var td3 = document.createElement("td")
        td3.innerText = elem.teamB;
          
        var td4 = document.createElement("td")
        td4.innerText = elem.date;

        var td5 = document.createElement("td")
        td5.innerText = elem.venue;

        var td6 = document.createElement("td")
        td6.innerText = "Add as Favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"

        td6.addEventListener("click" ,function (){
            addTofavourite(elem)
        })

        row.append(td1 ,td2, td3, td4, td5,td6)

        document.querySelector("tbody").append(row)
 })

 function addTofavourite(elem){
     console.log(elem)
     favou.push(elem)
     localStorage.setItem("favourites" , JSON.stringify(favou));

     window.location.href ="favourites.html"
 }
}
