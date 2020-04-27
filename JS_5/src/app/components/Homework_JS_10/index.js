 import $ from 'jquery'

 let addEventListeners = () => {
   $('.showMoreBtn').on('click', (e) => {
       let  url = 'https://reqres.in/api/users/' + e.target.dataset.id;
       fetch(url)
        .then(response => response.json())
        .then(result => { 
            showModal(result);
        });
   })

   $("#closeModalBtn").on("click", function(){   
    $("#modal").css("display", "none");
    $("#userDetails").empty();
});
}


function showModal(result) {
    $("#modal").css("display", "block");
    showUserDetails(result);
}

let showUserDetails = (result) =>{
    $("#userDetails").append (`
    <p class="userEmail">First name:${result.data.first_name}</p>
    <p class="userEmail">Last name:${result.data.last_name}</p>
    <p class="userAdress">Email:${result.data.email}</p>
    <p class="userPhone">Company:${result.ad.company}</p>
    <p class="userCompany">Text:${result.ad.text}</p> 
`);
}

 fetch('https://reqres.in/api/users')
     .then(response => response.json())
     .then(result => $(result.data).each(function (i, elem) {
         $('.userList').append(`  
                <div class="userList__item mx-3">
                    <div class="row">
                        <div class="col-5">
                            <img src="${elem.avatar}" alt="">
                        </div>
                        <div class="col-7">
                            <div class="userList__item--description">
                                <p class="first_name">${elem.first_name}</p>
                                <p class="last_name">${elem.last_name}</p>
                                <button class="showMoreBtn" data-id="${elem.id}" type="button">Show more</button>
                            </div>
                        </div>
                    </div>
                </div>`);

     })).then(rendered => addEventListeners());


