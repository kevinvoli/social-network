// let affiche=()=>   { 
   let discor =document.querySelectorAll('.come')
    for (let i = 0; i < discor.length; i++) {
        discor[i].addEventListener('click',(event)=>{
        let dic= discor[i].parentElement.parentElement
        dic.querySelector('.commentaire').classList.toggle('affiche')
       
        let formulair=dic.querySelector('.formulaire')
        formulair.classList.toggle('affiche')
        formulair.querySelector('.messageId').value=event.currentTarget.id
        console.log(event.currentTarget.id)
    })
    // }
   
}
    // .classList.toggle('affiche')

    
    // document.querySelectorAll('.form')
    // classList.toggle('afficheForm')
   
// document.querySelector('.messageId').value=mesId
// console.log(mesId)

