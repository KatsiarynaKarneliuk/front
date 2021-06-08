/*let items = document.getElementsByClassName("item");
console.log(items);

for(let item of items){
    console.log(item.textContent)
    item.textContent="пять";
    console.log(item.classList)
}
let items =querySelectorAll(".item"); /*ищем по классу item*/
/*console.log(items); *//* в ответе не html collection, but NodeList, внутри массив*/

/*let items =document.querySelectorAll(".item:last-child");
console.log(items);*/
let items =document.querySelector(".item");
console.log(items);