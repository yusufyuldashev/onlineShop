let shop = [
    {
        img:"https://ae01.alicdn.com/kf/H6c692699202c44bab5d4996932bada982.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'kuylak',
    },
    {
        img:"https://ae01.alicdn.com/kf/Ubf122f3c6d5f435e849952c701e2b7fax.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'naushnik',
    },
    {
        img:"https://ae01.alicdn.com/kf/HTB1G_T.IwHqK1RjSZFgq6y7JXXaY.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'telfon'
    },
    {
        img:"https://ae01.alicdn.com/kf/H55dafa82072c4235af2a4afa86188a274.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'tapichka',

    },
    {
        img:"https://ae01.alicdn.com/kf/H83d5a738df0e4165946dd0e155b4a563W.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'zaryadchik'
    },
    {
        img:"https://ae01.alicdn.com/kf/H7a0d176af0e442d4a3cf455f8f3416adY.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'zaryadchik'
    },
    {
        img:"https://ae01.alicdn.com/kf/H26e392f8f2e64fe48da8c77d8ec1b17cD.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'achki',
    },
    {
        img:"https://ae01.alicdn.com/kf/H775c64395e2846a99519a698b06cb4e6o.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'powerbank'
    },
    {
        img:"https://ae01.alicdn.com/kf/H30c2d5852fe44ff7bb1a3255f37249a9w.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'achki'
    },
    {
        img:"https://ae01.alicdn.com/kf/H96addd37aa494dcc91481dd3c99f3800F.jpg",
        title:'Женская блузка с рукавами-фонариками, модельные топы из шелка и льна с принтом для вечерние',
        price:'6 261,51 руб.',
        slog:'23 продано',
        name:'chexol'
    }
]
shop.forEach((params) =>{
   let newLi = document.createElement("li")
   let mainImg  = document.createElement("img")
   let mainTitle = document.createElement("h4")
   let mainPrice = document.createElement("h3")
   let mainSlog = document.createElement("p")
    mainImg.setAttribute('src' , params.img)  
    mainImg.setAttribute('width' , '130px')
    mainImg.setAttribute('height'  , '170px')  
    mainTitle.textContent = params.title
    mainPrice.textContent = params.price
    mainSlog.textContent = params.slog
    newLi.appendChild(mainImg)
    newLi.appendChild(mainTitle)
    newLi.appendChild(mainPrice)
    newLi.appendChild(mainSlog) 
    list.appendChild(newLi)
})
let elForm = document.querySelector('#form')
let elInput = elForm.querySelector('#input')
let elSmallList = elForm.querySelector("#small-list")
elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    let regex = new RegExp(elInput.value.trim() , 'gi')

    for(let i = 0 ; i<shop.length;i++){
        if(shop[i].name.match(regex)){
            let newSecondLi = document.createElement("li")
   let mainSecondImg  = document.createElement("img")
   let mainSecondTitle = document.createElement("h4")
   let mainSecondPrice = document.createElement("h3")
   let mainSecondSlog = document.createElement("p")
    mainSecondImg.setAttribute('src' , shop[i].img)  
    mainSecondImg.setAttribute('width' , '130px')
    mainSecondImg.setAttribute('height'  , '170px')  
    mainSecondTitle.textContent = shop[i].title
    mainSecondPrice.textContent = shop[i].price
    mainSecondSlog.textContent = shop[i].slog
    newSecondLi.appendChild(mainSecondImg)
    newSecondLi.appendChild(mainSecondTitle)
    newSecondLi.appendChild(mainSecondPrice)
    newSecondLi.appendChild(mainSecondSlog)
    smallList.prepend(newSecondLi)
        }
    }

    elInput.value = ''
})