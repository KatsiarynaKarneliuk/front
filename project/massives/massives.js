let items = new Array();
let items2 = [];
let items = new Array(3); /*массив пустой из 3 элементов*/
let items = new Array("Анна","Светлана","Егор");
let names = ["Катя","Марина","Света"];
let numbers = [1,2,3,4];


for (let i=0; i<names.length; i++)
{
    console.log(i);
    console.log(names[i]);
}

for(let name of names)  /*name - имя, кот мы придумали*/
{
    console.log(name);
}

names.forEach(function(name){
    console.log(name);
})

names.forEach(function(name,index){
    console.log(name,index);
})