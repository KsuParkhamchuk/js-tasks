import $ from 'jquery'


let users = [{
        "_id": "5e9abd32b830663252a1a553",
        "index": 0,
        "guid": "cd2cd136-9664-4757-823e-412a0581626e",
        "isActive": false,
        "balance": "$1,405.94",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "blue",
        "name": {
            "first": "Nolan",
            "last": "Dodson"
        },
        "company": "GENMOM",
        "email": "nolan.dodson@genmom.us",
        "phone": "+1 (809) 410-2587",
        "address": "594 Lyme Avenue, Sutton, Minnesota, 6751",
        "about": "Non nostrud exercitation cillum cupidatat officia consequat anim id excepteur non velit anim. Aliquip qui occaecat ad dolore non adipisicing nostrud culpa. Elit est non esse ipsum occaecat nulla cillum enim ex. Aliqua id tempor dolor aute ullamco consequat cupidatat incididunt duis labore officia adipisicing. Pariatur consequat ex reprehenderit irure aliqua consectetur.",
        "registered": "Thursday, July 16, 2015 1:23 PM",
        "friends": [{
                "id": 0,
                "name": "Liz Underwood"
            },
            {
                "id": 1,
                "name": "Jennie Lynn"
            },
            {
                "id": 2,
                "name": "Kristine Cochran"
            }
        ],
        "greeting": "Hello, Nolan! You have 10 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5e9abd3265bc71d749924ace",
        "index": 1,
        "guid": "bc7ea661-cebf-4cb6-b13c-70c511ce37f8",
        "isActive": true,
        "balance": "$1,378.85",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "brown",
        "name": {
            "first": "Castillo",
            "last": "Berg"
        },
        "company": "QUILTIGEN",
        "email": "castillo.berg@quiltigen.net",
        "phone": "+1 (876) 564-2364",
        "address": "224 Kenilworth Place, Spelter, Arizona, 6558",
        "about": "Sit in duis deserunt reprehenderit eiusmod non minim dolor velit veniam. Duis ut irure esse id amet culpa aliquip amet incididunt ipsum excepteur sint aliquip. Dolore quis Lorem fugiat duis. Tempor commodo ex irure aliqua reprehenderit ipsum. Consequat ipsum nostrud dolor aliqua id nostrud deserunt magna adipisicing deserunt. Pariatur laboris enim occaecat culpa ullamco excepteur sunt ipsum dolore anim amet anim. Enim pariatur aliqua duis Lorem qui et commodo adipisicing.",
        "registered": "Sunday, December 20, 2015 4:36 AM",
        "friends": [{
                "id": 0,
                "name": "Oliver Price"
            },
            {
                "id": 1,
                "name": "Ramirez Justice"
            },
            {
                "id": 2,
                "name": "Brooks Wood"
            }
        ],
        "greeting": "Hello, Castillo! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5e9abd32a899a5f7637128cf",
        "index": 2,
        "guid": "a673fa9b-283d-40a8-a9a7-67fd98b93f3b",
        "isActive": true,
        "balance": "$3,211.36",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "green",
        "name": {
            "first": "Agnes",
            "last": "Beck"
        },
        "company": "PARLEYNET",
        "email": "agnes.beck@parleynet.co.uk",
        "phone": "+1 (856) 507-3029",
        "address": "237 Channel Avenue, Warsaw, Delaware, 903",
        "about": "Id excepteur voluptate commodo labore cupidatat et cupidatat ea velit nostrud. Ea nisi non laboris aliquip consequat commodo non anim officia deserunt occaecat labore occaecat. Pariatur nostrud ut culpa anim qui occaecat.",
        "registered": "Thursday, February 12, 2015 6:36 PM",
        "friends": [{
                "id": 0,
                "name": "Ford Sosa"
            },
            {
                "id": 1,
                "name": "Gabrielle Heath"
            },
            {
                "id": 2,
                "name": "Bryant Colon"
            }
        ],
        "greeting": "Hello, Agnes! You have 5 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5e9abd32e07ba54a8f034819",
        "index": 3,
        "guid": "fc5c988c-259b-45f4-8923-91ac986a632d",
        "isActive": false,
        "balance": "$2,524.56",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "brown",
        "name": {
            "first": "Carver",
            "last": "Rutledge"
        },
        "company": "WEBIOTIC",
        "email": "carver.rutledge@webiotic.org",
        "phone": "+1 (968) 506-3048",
        "address": "239 Hunterfly Place, Lloyd, Federated States Of Micronesia, 6019",
        "about": "Laborum minim labore cillum deserunt officia cillum esse. Laboris eiusmod velit id non duis ullamco id cupidatat. Laborum velit mollit ad labore consectetur incididunt. In adipisicing exercitation velit in. Velit duis nostrud voluptate culpa commodo eiusmod Lorem anim.",
        "registered": "Tuesday, April 12, 2016 7:48 AM",
        "friends": [{
                "id": 0,
                "name": "Wolfe Mccoy"
            },
            {
                "id": 1,
                "name": "Holden Hull"
            },
            {
                "id": 2,
                "name": "Janine Durham"
            }
        ],
        "greeting": "Hello, Carver! You have 7 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5e9abd321b1d9075a80a2e88",
        "index": 4,
        "guid": "f446ff8f-aa63-4a61-ad7a-e02fd17435eb",
        "isActive": false,
        "balance": "$3,775.05",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "brown",
        "name": {
            "first": "Ingram",
            "last": "Stevenson"
        },
        "company": "JETSILK",
        "email": "ingram.stevenson@jetsilk.ca",
        "phone": "+1 (921) 576-2744",
        "address": "223 Bath Avenue, Hoehne, Pennsylvania, 4351",
        "about": "Aliquip in aliqua commodo laboris. Eu ex ut incididunt duis voluptate sit adipisicing. Duis cillum aute ullamco consectetur. Laborum sit ad laboris exercitation.",
        "registered": "Thursday, January 16, 2014 9:01 AM",
        "friends": [{
                "id": 0,
                "name": "Daniel Bowman"
            },
            {
                "id": 1,
                "name": "Higgins Abbott"
            },
            {
                "id": 2,
                "name": "Willa Gardner"
            }
        ],
        "greeting": "Hello, Ingram! You have 8 unread messages.",
        "favoriteFruit": "apple"
    }
]


function UserListConstructor(usersPlacement, users) {
    this.users = users;
    this.usersPlacement = usersPlacement;

    let searchLine = '';
    let eyeColor = [];
    let age = ['',''];
    let favFruit ='';
    let salary = '';

    this.init = function () {
        this.initUserList(this.users);
        this.initFilters();
        this.addEventListeners();
    }

    this.initUserList = function (users) {
        const self = this;
        self.usersPlacement.html('');
        $(users).each(function (ind, elem) {     
            self.usersPlacement.append(
                `
              <div class="userList__item mx-3">
                    <div class="row">
                        <div class="col-5">
                            <img src="${elem.picture}" alt="">
                        </div>
                        <div class="col-7">
                            <div class="userList__item--description">
                                <p class="name">${showObjectValues(elem.name)}</p>
                                <p class="age">${elem.age}</p>
                                <p class="eyes">${elem.eyeColor}</p>
                                <p class="friuts">${elem.favoriteFruit}</p>
                                <p class="salary">${elem.balance}</p>
                                <button id="showMoreBtn">Show more</button>
                            </div>
                        </div>
                    </div>
                </div>
              `
            )


        })
    }

    this.initFilters = function () {

        let eyeArray = this.createUniqueArr(this.users, "eyeColor");
        $(eyeArray).each(function (i, elem) {
            $('.filters__eyeColor').append(`
            <label for="">${elem}:</label>
            <input type="checkbox" name="eye" value="${elem}">
            `)
        })
        let fruitArr = this.createUniqueArr(this.users, "favoriteFruit");
        $(fruitArr).each(function (i, elem) {
            $('.filters__fruit').append(`
            <label for="">${elem}</label>
            <input type="radio" name="fruit" value=${elem}>
            `)
        })

        let balanceArr = []; 
        $(users).each(function (i, elem) {
            balanceArr.push(Number.parseInt(elem.balance.replace(/\D/gim,'')));
        })
        let minSalary = this.findMinSalary(balanceArr);
        let maxSalary = this.findMaxSalary(balanceArr);

        $(".filters__salary").append(`
        <span>from:  ${minSalary}</span>
        <span>to:  ${maxSalary}</span>
        <input id="salaryRange" type="range" step="100" min="${minSalary}" max="${maxSalary}">
        <input id="currentRangeValue" type="number">
        
        `)

    }

    this.addEventListeners = function(){
        const self = this;
        $('#confirmFilters').on('click', function(){
            self.filterList();
        }) 
        
        $('#returnUsers').on('click', function(){
            self.initUserList(self.users);
        })
      
        $('#salaryRange').on("change", function(){
            let temp = $(this).val();
            $('#currentRangeValue').val(temp);
            salary =  $('#currentRangeValue').val();         
        })

        $('#userSearch').on('change', function(e){
            searchLine = e.target.value;  
        })

        $("input:checkbox").on('change', function(e){
            eyeColor = [];
            $("input:checkbox:checked").each(function(i,elem){
                eyeColor.push($(elem).attr("value"));             
            })
        })

        $("input:radio").on ('change', function(e){
            favFruit = $("input:radio:checked").attr("value");
        })
        
        $('#searchButton').on('click', function(){
            let searchResult = self.users.filter(function(item){
                return item.name.first.indexOf(searchLine) > -1
                || item.name.last.indexOf(searchLine) > -1;
            })
            self.initUserList(searchResult);
        })
    }

    this.filterList = function(){
       
       let filteredList = this.users.filter( function(item){
           
           return (favFruit == '' || favFruit == item.favoriteFruit)
           && (salary == '' || item.balance.replace(/\D/gim,'') <= salary)
           && ((age[1] == ''|| item.age > age[1] )&&(age[2] == '' || item.age < age[2]))
       })

       this.initUserList(filteredList);
    }

    this.createUniqueArr = function (users, parametr) {

        let uniqueArr = [];
        $(users).each(function (i, elem) {
            uniqueArr.indexOf(elem[parametr]) == -1 ? uniqueArr.push(elem[parametr]) : null;
        })
        return uniqueArr;
    }

    this.findMinSalary = function (balanceArr) {
        return Math.min.apply(null, balanceArr);
    }

    this.findMaxSalary = function (balanceArr) {       
        return Math.max.apply(null, balanceArr);
    }

    let showObjectValues = function (obj) {
        let str = '';
        for (let key in obj) {
            if (key instanceof Object) {
                str += showObjectValues(obj.key);
            }
            str += "<span>" + " " + obj[key] + " </p\span>";
        }
        return str;
    }

}

let createUserFiltersPage = new UserListConstructor($(".userList"), users);
createUserFiltersPage.init();