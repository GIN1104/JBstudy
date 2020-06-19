


let users = [];
let strUser = "";
let url = "https://jsonplaceholder.typicode.com/users";
let getAllUssers = (url) =>{
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        success: function (data) {
            users = data;
            printUsers(users);

        },
        error: function (error) {
            console.log("error : ", error);
        }
    });
}

let printUsers = (users) => {
    for( user of users){
    
     strUser +=  `<div class="card p-4 m-4" style="width: 18rem;">`
     strUser += `<h5 class="card-title">Name : ${user.name}</h5>`
     strUser += `<p class="card-text">ID : ${user.id}</p>`
     strUser += `<p class="card-text">Username : ${user.username}</p>`
     strUser += `<p class="card-text">Phone : ${user.phone}</p>`
     strUser += `<p class="card-text">Email : ${user.email}</p>`
     strUser += `<a href="${user.website}" class="btn btn-primary">More details</a>`
     strUser += `</div>`
    }
    userDV.innerHTML = strUser;
 
 }

 let searchUser = () =>{

    strUser = '';
    let newUser = [];
 
    let letter = userId.value;
    let option = options.value;
  

    if (option === "ID"){
            newUser = users.filter(user => {
           return String(user.id).includes(letter);
            })}
       
    else if (option == "Name"){
             newUser = users.filter(item => {
            return item.name.includes(letter);
             })}
    else if (option == "Username"){
            newUser = users.filter(item => {
            return item.username.includes(letter);
            })}
    else if (option == "Email"){
            newUser = users.filter(item => {
            return item.email.includes(letter);
             })}  
    else if (option == "Phone"){
            newUser = users.filter(item => {
            return item.phone.includes(letter);
                 })};  


       
             printUsers(newUser);
        console.log(newUser);
    }

getAllUssers(url);
