const accordionItemHeader = document.querySelectorAll('.accordionItemHeader');

accordionItemHeader.forEach(accordionItemHeaders =>{accordionItemHeaders.addEventListener('click',event=>{
  const currentlyActivePart = document.querySelector('.accordionItemHeader.active');
 
  if(currentlyActivePart && currentlyActivePart!==accordionItemHeaders){
    currentlyActivePart.classList.remove('active');
    
    currentlyActivePart.nextElementSibling.style.maxHeight = 0;

  }
    accordionItemHeaders.classList.toggle('active')
const accordionItemBody = accordionItemHeaders.nextElementSibling;
 if(accordionItemHeaders.classList.contains('active')){
   accordionItemBody.style.maxHeight= accordionItemBody.scrollHeight + 'px';
 }else{
   accordionItemBody.style.maxHeight = 0;
 }
  });
  
});
