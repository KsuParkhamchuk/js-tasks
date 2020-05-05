import $ from 'jquery'

class Post{
    constructor(obj){
        this.userId = obj.userId;
        this.id = obj.id;
        this.title = obj.title;
        this.body = obj.body;
    }

    init(){
        this.drawPost();
        this.editPostBtnClick();
    }

    drawPost() {
        const _self = this;
        $('.postsList').append(`
            <div class="col-6">
            <div class="postItem__content">
                <div class="postItem__content--header d-flex">
                    <p class="postItem__content--header--id">${_self.id}</p>
                    <p class="postItem__content--header--title mx-3 font-weight-bold">${_self.title}</p>
                    <p class="postItem__content--header--userId">Author:${_self.userId}</p>
                </div>
                <div class="postItem__content--body">
                    ${_self.body}
                </div>
                <div class="controlPanel">
                    <button class="deletePost" data-id-delete="${_self.id}">Delete</button>
                    <button class="editPost" data-id-edit="${_self.id}">Edit</button>
                </div>
            </div>
        </div>
            `)
    }

    editPostRequest(id, title, body){
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'PUT',
            body: {
                title: title,
                body: body
            }
        })
            .then(response => response.ok ? getAllPosts() : Promise.reject(response));
    }

    editPostBtnClick() {
        const _self = this;
        $('.editPost').on('click', (e) => {
            fetch('https://jsonplaceholder.typicode.com/posts/'+ e.target.dataset.idEdit)
                .then(response => response.json())
                .then(result => _self.showModal(result))
                .catch((e) =>{
                    console.log("Error: " + e.message);
                    console.log(e.response);
                })
        })
    }

    showModal(result){
        $("#modal").css("display", "block");
        this.showUserDetails(result);  
    }

    showUserDetails(result){

        $("#closeModalBtn").on("click", function(){   
            $("#modal").css("display", "none");
            $("#userDetails").empty();
        })

        $("#userDetails").append (`
        <form id="${"formInfo" + result.id}">
            <p class="userEmail">Id:${result.id}</p>
            <p class="userEmail">UserId:${result.userId}</p>
            <label>Title:</label>
            <input id='${'postTitle' + result.id}' class="postTitle" value="${result.title}">
            <label>Content:</label>
            <input id='${'postBody' + result.id}' class="postBody" value="${result.body}">
            <button id="EditSave"class="editBtnSave" type="button" onclick="${this.editPostRequest(result.id,$('.postTitle').val(),$('.postBody').val())}">Save</button>
        </form>
    `);
    }
}

class PostList{
    constructor(obj){
        this.init();
    }

    init(){
        this.getAllPosts();
        this.onBtnClickSearch();
    }

    getAllPosts(id){
        const _self = this;
        fetch(`https://jsonplaceholder.typicode.com/posts${id ? '?userId=' + id : ''}`)
            .then(response => response.ok ? response.json(): Promise.reject(response))
            .then(data => _self.drawPosts(data))
            .catch((e) =>{
                console.log("Error: " + e.message);
                console.log(e.response);
            })

    }

    drawPosts(data){
        const _self = this;
        $('.postsList').html('');
        let newpostList = data.map( (item) =>{
            return new Post({
                ...item
            }).init()
            
        }) 
    }

    onBtnClickSearch(){
        const _self = this;
        $('.searchByUserId').on('click', () =>{
            _self.getAllPosts($('.userIdInput').val());
        })
    }
}

let newList = new PostList();
