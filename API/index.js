const getData=async()=>{
    let req=await fetch("https://fakestoreapi.com/products")
    let res=await req.json()
    console.log(res);
    Display(res)
}

const Display = (prod) => {
    document.getElementById("data").innerHTML = "";
    prod.map(product => {
        let div = document.createElement('div');
        div.classList.add('product');

        let img = document.createElement("img");
        img.src = product.image;
        
        let title = document.createElement("h4");
        title.textContent = product.title;

        let description = document.createElement("p");
        description.textContent = product.description;

        let price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        div.append(img,title,description,price);
        document.getElementById("data").append(div);
    });
}

getData();