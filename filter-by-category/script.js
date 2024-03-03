const categories=["All","Men","Women","kids"];

const content=[
    {
        id: "Men",
        label:"Men Shirt 1",
    },
    {
        id: "Men",
        label:"Men Shirt 2",
    },
    {
        id: "Men",
        label:"Men Shirt 3",
    },
    {
        id: "Men",
        label:"Men Shirt 4",
    },
    {
        id: "Women",
        label:"Women Shirt 5",
    },
    {
        id: "Women",
        label:"Women Shirt 1",
    },
    {
        id: "Women",
        label:"Women Shirt 2",
    },
    {
        id: "Women",
        label:"Women Shirt 3",
    },
    {
        id: "Women",
        label:"Women Shirt 4",
    },
    {
        id: "Women",
        label:"Women Shirt 5",
    },
    {
        id: "Kids",
        label:"Kids Shirt 1",
    },
    {
        id: "Kids",
        label:"Kids Shirt 2",
    },
    {
        id: "Kids",
        label:"Kids Shirt 3",
    },
    {
        id: "Kids",
        label:"Kids Shirt 4",
    },
    {
        id: "Kids",
        label:"Kids Shirt 5",
    }
]

const filterButtons=document.querySelector(".filter-buttons-wrapper");
const contentWrapper=document.querySelector(".content-wrapper");
console.log(contentWrapper);

function createButtons(){
    const div=document.createElement('div');
    console.log(div);
    div.classList.add("category");
    categories.forEach(category=>{
        const buttonEle=document.createElement('button');
        buttonEle.innerText=category;
        buttonEle.classList.add('filter-button');
        buttonEle.setAttribute('data-filter',category);
        filterButtons.appendChild(buttonEle);
    })
}

function createContent(){
    content.forEach(contentItem=>{
        const singleContentItem=document.createElement('div');
        singleContentItem.classList.add('card',contentItem.id);
        singleContentItem.textContent=contentItem.label;
        contentWrapper.appendChild(singleContentItem);
    })
    

}
createContent();
createButtons();

const allFilterButtons=document.querySelectorAll('.filter-button');
const allCards=document.querySelectorAll('.card');

console.log(allCards,allFilterButtons);

allFilterButtons.forEach(singleFilterButtonItem=>{
    singleFilterButtonItem.addEventListener('click',()=>{
        const extractCurrentCategory=singleFilterButtonItem.dataset.filter;
        console.log(extractCurrentCategory);

        filterCardsByCategory(extractCurrentCategory,allCards);
    })
})


/*Ifunction filterCardsByCategory(extractCurrentCategory,allCards){
    console.log("is thsi working fine")
    allCards.forEach(item=>{
        const isShowAllCards=extractCurrentCategory.toLowerCase()==='all';
        const isItemFilter=!item.classList.contains(extractCurrentCategory);

        console.log(item.classList[3]);

        if(isItemFilter && !isShowAllCards){
            item.classList.add('hide')
        }
        else{
            item.classList.remove('hide');
        }
    
    })

}*/
function filterCardsByCategory(extractCurrentCategory, allCards) {
  allCards.forEach(item => {
    if (extractCurrentCategory !== "All" && extractCurrentCategory !== item.classList[0]) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });
}

//4:12