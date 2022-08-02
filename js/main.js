
var productNameInput = document.getElementById('productNameInput');//Input kolo
var productPriceInput = document.getElementById('productPriceInput');//Input kolo
var productCategoryInput = document.getElementById('productCategoryInput');//Input kolo
var productDescInput = document.getElementById('productDescInput');//Input kolo
var searchInput=document.getElementById('search');
var addBtn=document.getElementById('addBtn');

var currentIndex=0;

var productsContainer=[]; //3shan tsheil kol elproducts value elly el user hayd5lha

if(localStorage.getItem('myProducts')!=null)
{
    productsContainer = JSON.parse(localStorage.getItem('myProducts'));
    displayProducts(productsContainer)
}
else
{
    productsContainer=[];
}
addBtn.onclick=function(){
    if(addBtn.innerHTML=='add Product')
    {
        addProduct();
    }
    else
    {
        updateProduct();
    }
    displayProducts();
    clearForm();
}
function addProduct() {
    if(validateName()==true && validatePrice()==true )
    {
        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescInput.value
        }
        productsContainer.push(product);
        localStorage.setItem('myProducts',JSON.stringify(productsContainer))//da 4shan a5od a5r update w t7wl json L string
        clearForm();
        displayProducts(productsContainer);   
    }
}

function clearForm() {
    
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
    addBtn.innerHTML="add Product";
  }

function displayProducts() { 
    var cartoona = ``;
    for(var i =0;i<productsContainer.length; i++)
    {
        cartoona +=`<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
        <td> <button onclick="deletProduct(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
 }


function Search (searchText){
    var cartona ='';
    for (var i=0 ; i<productsContainer.length;i++)
    if (productsContainer[i].name.toLowerCase().includes(searchText.toLowerCase()))
    {
        cartona+=
        `
        <tr>
            <td>${i+1}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
            <td> <button onclick="deletProduct(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>
        `;
    } document.getElementById('tableBody').innerHTML=cartona;
}


function deletProduct (deletedIndex){
    productsContainer.splice(deletedIndex,1);
    localStorage.setItem('myProducts',JSON.stringify(productsContainer))
    displayProducts(productsContainer);
} 
function getInfo (index){
   
    var currentProduct=productsContainer[index]
    productNameInput.value = currentProduct.name;
    productPriceInput.value = currentProduct.price;
    productCategoryInput.value = currentProduct.category;
    productDescInput.value = currentProduct.desc;
    addBtn.innerHTML='update';
    currentIndex=index;
}
function updateProduct(){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    console.log(productsContainer);
    productsContainer[currentIndex]=product;
    console.log(productsContainer);
    localStorage.setItem('myProducts',JSON.stringify(productsContainer))
    
    clearForm();
    displayProducts();
}
function validateName(){
    var regex=/^[a-zA-Z ]{2,14}$/;
    if (regex.test(productNameInput.value)==true)
    {
        productNameInput.classList.replace('is-invalid','is-valid')
        return true;
    }
    else
    {
        productNameInput.classList.add('is-invalid')
    }
}
// function validateCategory(){
//     var regex=/^[a-zA-Z ]{2,14}$/;
//     if (regex.test(productCategoryInput.value)==true)
//     {
//         productCategoryInput.classList.replace('is-invalid','is-valid')
//         return true;
//     }
//     else
//     {
//         productCategoryInput.classList.add('is-invalid')
//     }
// }
function validatePrice(){
    var regex=/^[1-9]{1,5}$/;
    if (regex.test(productPriceInput.value)==true)
    {
        productPriceInput.classList.replace('is-invalid','is-valid')
        return true;
    }
    else
    {
        productPriceInput.classList.add('is-invalid')
    }
}




// function searchProducts(searchTerm)
// {
//     var searchResult=[];
//     for (var i =0 ; i<productsContainer.length; i++)
//     {
//         if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())== true)
//         {
//             searchResult.push(productsContainer[i]);
//         }
//     }
//     displayProducts(searchResult);
// }

// var productsContainer = [
//     {name:'nokia' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'samsung' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'toshiba' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'oppo' , price:9000 , category:'mobile' , desc:'good'},

// ]



