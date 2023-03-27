var prodData=JSON.parse(localStorage.getItem("products")) || []

  prodData.map(function(ele, index){
    let div=document.createElement("div")

    let type= document.createElement("h3")
    type.innerText=ele.type;

    let desc=document.createElement("p")
    desc.innerText=ele.desc;

    let price=document.createElement("p")
    price.innerText=ele.price;

    let image= document.createElement("img")
    image.src=ele.image;

    let btn=document.createElement("button")
    btn.innerText="Remove";
    btn.addEventListener("click", function(){
      removedata(ele,index)
    });

    div.append(image,type,desc,price,btn)

    document.querySelector("#all_products").append(div)
  })

  function removedata(ele, index){
    prodData.splice(index,1)
    localStorage.setItem("products",JSON.stringify(prodData));
    window.location.reload();
  }