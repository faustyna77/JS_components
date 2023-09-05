const light=document.querySelector('.light')
const dark=document.querySelector('.dark')
const btnadd=document.querySelector('.btnadd')
const body=document.querySelector('body')
const transactionOption=document.querySelector('.transaction-options')
const btnRemove=document.querySelector('.btnRemove')
const transactionName=document.querySelector('.transaction-name')
const alert=document.querySelector('.alert')
const saveTransaction=document.querySelector('.save-transaction')
const transactionList=document.querySelector('.transaction-list')
const classul=document.querySelector('.classul')
const amount=document.querySelector('.amount')



const changeStyleBlack=()=>
{
    body.style.backgroundColor='black'

}

const changeStyleWhite=()=>
{
    body.style.backgroundColor='white'
}
const showPanel=()=>
{
    transactionOption.style.display='flex'

}

const removePanel=()=>
{
    transactionOption.style.display='none'

}


const checkPanel=()=>
{
    
    if(transactionName.value==='')
    {
        alert.innerHTML='nie'
    }

}

const addToPanel=()=>
{
    const li= document.createElement('li')

    li.textContent=transactionName.value
    classul.appendChild(li)
    let newbutton=document.createElement('button')
    newbutton.textContent='Usuń'
    newbutton.setAttribute('class','newbtn2')
    classul.appendChild(newbutton)
    var newbtn2=document.querySelector('.newbtn2')
   newbtn2.onclick=function()
   {
    removeFromPanel()
   }
  
   

    
   
    
    
}

const removeFromPanel=()=>
[
    classul.style.display='none'
]

light.addEventListener('click',changeStyleWhite)
dark.addEventListener('click',changeStyleBlack)
btnadd.addEventListener('click',showPanel)
btnRemove.addEventListener('click',removePanel)

transactionName.addEventListener('change',checkPanel)
saveTransaction.addEventListener('click',addToPanel)
