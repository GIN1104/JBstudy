


let users = [];
let strUser = "";
let url = "https://jsonplaceholder.typicode.com/users";
let getAllUsers = (url) =>{
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
    let newUser = [],
        letter = userId.value,
        enterOpt = enterOption.value.toUpperCase(); 
        option = options.value;
  console.log(enterOpt)
  

    if     (enterOpt == "ID"){
            newUser = users.filter(user => {
            return String(user.id).includes(letter);
            })}
       
    else if (enterOpt == "NAME"){
             newUser = users.filter(user => {
            return user.name.includes(letter);
             })}
    else if (option == "Username"|| enterOpt == "USERNAME"){
            newUser = users.filter(user => {
            return user.username.includes(letter);
            })}
    else if (option == "Email" || enterOpt == "EMAIL"){
            newUser = users.filter(user => {
            return user.email.includes(letter);
             })}  
    else if (option == "Phone" || enterOpt == "PHONE"){
            newUser = users.filter(user => {
            return user.phone.includes(letter);
                 })};  


       
             printUsers(newUser);
        console.log(newUser);
    }

getAllUsers(url);
