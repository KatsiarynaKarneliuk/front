function createCat(){
    let name =document.getElementById('name').value;
    let breed  =document.getElementById('breed').value; 

    class Cat{  
        constructor(name,breed){
            this.name = name;
            this.breed = breed;
        }
    }

    let cat1 = new Cat(name,breed); 
    console.log(`Ваш питомец ${cat1.name} и его порода ${cat1.breed}`);
}
  
function show(){
    switch (document.getElementById("breed").value){
        case "Персидская": document.getElementById('catImage').src="https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg"; break;
        case "Сибирская": document.getElementById('catImage').src="img/depositphotos_59478951-stock-photo-red-kitten.jpg"; break;
        case "Русская голубая": document.getElementById('catImage').src="img/depositphotos_59478951-stock-photo-red-kitten.jpg"; break;
    }
}

