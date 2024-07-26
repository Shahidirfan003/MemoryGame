let emojis=['😂','😊','😍','💕','😎','😶‍🌫️','😣','😭','😂','😊','😍','💕','😎','😶‍🌫️','😣','😭'];
let divs=document.querySelectorAll('.container div');
let p=document.querySelector('p');
let reset=document.querySelector('button');
let active,match,flips;

Reset();

function Reset(){
    flips=0;
    p.innerText=`Total flips: ${flips}`;
   for(let i=0;i<=Math.floor(Math.random()*15)+1;i++){
       let temp=emojis[emojis.length-1];
        emojis[emojis.length-1]=emojis[i];
        emojis[i]=temp;
   }

   for(let i=0;i<divs.length;i++){
       divs[i].innerHTML=emojis[i];
   }
   
   for(let div of divs){
       div.classList.add('active');
   }
   setTimeout(()=>{
       for(let div of divs){
          div.setAttribute('class',"");
       }
   },200)
}


reset.addEventListener('click',()=>{
   Reset();
})

for(let div of divs){
    div.addEventListener('click',()=>{
        flips++;
        p.innerText=`Total flips: ${flips}`;
        div.classList.add('active');
       
        active=document.querySelectorAll('.active');

        setTimeout(()=>{
            if(active.length>1){
                if(active[0].innerHTML==active[1].innerHTML){
                    active[0].classList.add('match');
                    active[1].classList.add('match');
                    active[1].classList.remove('active');
                    active[0].classList.remove('active');

                    match=document.querySelectorAll('.match');
                    if(match.length==16){
                        alert('you won');
                    }
                }
                else{
                    active[0].classList.remove('active');
                    active[1].classList.remove('active');
                }
            }
        },500)
    
    })
}