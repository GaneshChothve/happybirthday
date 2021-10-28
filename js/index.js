
let textele1 = document.getElementById('happy')
let textele2 = document.getElementById('birthday')
let textele3 = document.getElementById('name')
let audio= new Audio('./music/pungi_happy_birthday.mp3')
let audio2= new Audio('./music/birthday.mp3')

function createBox(s,textele) {
    const box = document.createElement('div');
    box.classList.add('box');
    textele.appendChild(box)
    box.innerHTML = s;
}

let text = 'HAPPY'
passText(text,textele1)
text= 'BIRTHDAY'
passText(text,textele2)
text= 'KRISHNA'
passText(text,textele3)

function passText(text,textele) {
    for (let i = 0; i < text.length; i++) {
        createBox(text[i],textele)

    }
}


let boxes= document.querySelectorAll('.box')
console.log(boxes)
let footer= document.getElementsByTagName('footer')[0]
const krishnadp= document.getElementsByClassName('krishnadp')[0]
let i=0;
function bounce() {
    boxes[i].style.transform='translate(0,0)'
    i++;
    if(i==boxes.length){
        clearInterval(id)
        boxes.forEach(element => {
            element.classList.add('active')
        });
        audio.play()
        audio.addEventListener('ended',() => {
            audio.currentTime= 0;
            audio2.play();
            krishnadp.classList.add('active2')
        })
    }
}

let t= new Date();
let s1= t.getSeconds();
let s2=s1;
console.log(s1)

function addtimeup() {
    s2++;
    if(s2-s1==12){
        console.log(s2)
        let id3= setInterval(createBalloon,200)
        
        krishnadp.classList.toggle('active')
    }
    if(s2-s1==25){
        clearInterval(id2);
        
        footer.style.display='block';

    }
}

let id2=setInterval(addtimeup,1000)

let id= setInterval(bounce,500)


let k=0;
let imgs= ['./img/ballon1.svg','./img/ballon2.svg','./img/ballon3.svg']
function createBalloon() {
    const balloon= document.createElement('img')
    balloon.classList.add('balloon')
    balloon.style.left =Math.pow(-1,k)*Math.random()*100+'vw'
    balloon.style.animationDuration= Math.random()*2+1+'s'
    let c= Math.floor(Math.random()*3)
    balloon.src=`${imgs[c]}`;
    
    k++;
    document.body.appendChild(balloon)

    setTimeout (()=> {
        balloon.remove()
    },5000)
}


// Reload document

document.addEventListener('click',() => {
    document.location.reload();
})
