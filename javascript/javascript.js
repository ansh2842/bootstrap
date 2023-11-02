


let div = document.createElement('div')
div.id="root2"
let image = document.createElement('img')
image.src = "/Images/third.png"
image.className='rounded mx-auto imges'
div.append(image)
document.getElementById("root").appendChild(div)


let text = document.createElement('p')
text.textContent ='GREEN VEGETABLES PACK  $12.99'
text.className ="names"
document.getElementById("root2").appendChild(text)


let div1 = document.createElement('div')
div1.id ="root3"
let imag = document.createElement('img')
imag.src = "/Images/fourth.png"
imag.className='rounded mx-auto imges'
div1.append(imag)
document.getElementById("root").appendChild(div1)

let text2 = document.createElement('p')
text2.textContent ='FRUIT CART PACKS  $12.99'
text2.className ="names"
document.getElementById("root3").appendChild(text2)


let divs = document.createElement('div')
divs.id="root4"
let imag3 = document.createElement('img')
imag3.src = "/Images/fifth.png"
imag3.className='rounded mx-auto imges'
divs.append(imag3)
document.getElementById("root").appendChild(divs)

let text3 = document.createElement('p')
text3.textContent ='LEMON & ORANGE PACKS  $12.99'
text3.className ="names"
document.getElementById("root4").appendChild(text3)






