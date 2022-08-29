const buttonImage = document.querySelector('#button-image')

buttonImage.addEventListener('mouseover', function(){
    buttonImage.style.border = '5px solid black'
  
    buttonImage.src = './CNiphtyProphet/EnterHoverButton.svg'
    console.log(buttonImage)
})

buttonImage.addEventListener('mouseout', function(){
    buttonImage.style.border = '5px solid black'
    buttonImage.style.borderBottom = '11px solid black';
    buttonImage.style.borderLeft = '7px solid black';
    buttonImage.style.borderRight = '7px solid black';
    buttonImage.src = './CNiphtyProphet/EnterNoHover.svg'
})