const url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=12&orderBy=desc"
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
     console.log(res.data)
    displayData(res.data)
})
.catch(function(err){
    console.log(err)
})


wishlistData=JSON.parse(localStorage.getItem("wishlist"))||[]

function displayData(data){
    run(data);
    document.getElementById("sort-hl").addEventListener("click",function(){
        data.sort(function (a, b) {
            return b.price - a.price;
          });
          console.log(data)
          run(data);
       
    
    })
    document.getElementById("sort-lh").addEventListener("click",function(){
        data.sort(function (a, b) {
            return a.price - b.price;
          });
          console.log(data)
          run(data);
       
    
    })

    function run(data){
    data.forEach(function(elem){
        // console.log(elem)
        
        



        box=document.createElement("div")
        img=document.createElement("img")
        img.src=elem.image;

        box_midBox=document.createElement("div")
        box_midBox.setAttribute("id","box-midnox");
        
        brandTitle=document.createElement("p")
        brandTitle.innerText=elem.title;

        favorite=document.createElement("span");
        favorite.setAttribute("class","material-symbols-outlined")
        favorite.innerText="favorite";
      
        let flage=false;

        box_midBox_leftbox=document.createElement("div")
        box_midBox_leftbox.setAttribute("id","box-midnox-leftbox");
        box_midBox_leftbox.append(favorite)
        box_midBox_leftbox.addEventListener("click",function(){
           
            if(!flage)
            favorite.innerText="heart_plus";
            else  favorite.innerText="favorite";
            addTOWishlist(elem);
        })
       

        box_midBox.append(brandTitle,box_midBox_leftbox)
        price=document.createElement("p")
        price.innerText=`$${elem.price}`
       
        
        box.append(img,box_midBox,price,)
    
        document.querySelector("#productDiv").append(box)
    
    
    })
}
    }


    function addTOWishlist(elem){
        wishlistData.push(elem)
        console.log(wishlistData)
        localStorage.setItem("wishlist",JSON.stringify(wishlistData))
       
        
        }