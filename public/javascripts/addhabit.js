// fitCheck = null

// var fitness = document.getElementById('fitness');

// function healthButton() {
//     healthCheck = !null  

// }

// function fitButton() {
//     fitCheck = !null  


// }

// function learnButton() {

//     learnCheck = !null  

    
// }

// function susButton() {

//     susCheck = !null  

    
// }

// function houseButton() {

//     houseCheck = !null  

    
// }

// function relaxButton() {

//     relaxCheck = !null  

    
// }

// function famButton() {

//     famCheck = !null  

    
// }

// function finButton() {

//     finCheck = !null
    
// }

function changeBg(id) {
    document.querySelectorAll(".catimg").forEach(el=>{
        el.style.backgroundColor = "#fff";
    });
    document.querySelector(id).style.backgroundColor = "#f9f3c5";
    document.querySelector(id).style.borderRadius = "50%";

}

function resetButton() {
    document.getElementById("title").value = null;
    document.getElementById("details").value = null;

    document.getElementById("health").style.backgroundColor = null;
    document.getElementById("health").style.boxShadow = null;
    document.getElementById("health").style.width = "50px";
    document.getElementById("health").style.height = "50px";

    document.getElementById("learn").style.backgroundColor = null;
    document.getElementById("learn").style.boxShadow = null;
    document.getElementById("learn").style.width = "50px";
    document.getElementById("learn").style.height = "50px";

    document.getElementById("fitness").style.backgroundColor = null;
    document.getElementById("fitness").style.boxShadow = null;
    document.getElementById("fitness").style.width = "50px";
    document.getElementById("fitness").style.height = "50px";

    document.getElementById("sus").style.backgroundColor = null;
    document.getElementById("sus").style.boxShadow = null;
    document.getElementById("sus").style.width = "50px";
    document.getElementById("sus").style.height = "50px";

    document.getElementById("house").style.backgroundColor = null;
    document.getElementById("house").style.boxShadow = null;
    document.getElementById("house").style.width = "50px";
    document.getElementById("house").style.height = "50px";

    document.getElementById("house").style.backgroundColor = null;
    document.getElementById("house").style.boxShadow = null;
    document.getElementById("house").style.width = "50px";
    document.getElementById("house").style.height = "50px";

    document.getElementById("relax").style.backgroundColor = null;
    document.getElementById("relax").style.boxShadow = null;
    document.getElementById("relax").style.width = "50px";
    document.getElementById("relax").style.height = "50px";

    document.getElementById("family").style.backgroundColor = null;
    document.getElementById("family").style.boxShadow = null;
    document.getElementById("family").style.width = "50px";
    document.getElementById("family").style.height = "50px";

    document.getElementById("finance").style.backgroundColor = null;
    document.getElementById("finance").style.boxShadow = null;
    document.getElementById("finance").style.width = "50px";
    document.getElementById("finance").style.height = "50px";

    document.getElementById("amount").value = "1";
    document.querySelector(".ui-slider-handle").style.left = "0";
    document.querySelector("#slider-range-max").style.backgroundColor = "#e9e9e9";
}

function passData() {
    let makebox = document.createElement("button");
    makebox.value = "";
    makebox.style.backgroundColor = "#CCEBF2";
    makebox.style.border = "2px solid black";
    makebox.style.borderRadius = "8px";
    makebox.style.margin = "20px";
    makebox.style.minWidth = "400px";
    makebox.style.height = "80px";
    makebox.style.display = "flex";
    makebox.style.alignItems = "center";

    document.getElementById('ex').appendChild(makebox)
}

let input = document.getElementById('title');
let btn = document.querySelector('#save-btn');
let li = document.querySelector('#ex');
let el = document.getElementsByTagName('button');
let form = document.getElementById('new-task-form');
let append = document.getElementById('ex');


function Handler(){
    let slideValue = document.getElementById('amount').value
    var info = document.getElementById('title').value 



    const task = info;


    if(!task) {
        alert('Fill the title please!');
        } else {

            let new_but = document.createElement('button');
            new_but.classList.add('habit_btn');
            new_but.innerText = task;
            append.appendChild(new_but);


            
            let img_src = document.getElementsByClassName('catimg').src; 

            function pickImg() {
                let myImg = document.querySelectorAll(".catimg > img")
                for( let i = 0; i < myImg.length; i++) {
                    myImg[i].onclick = function(){
                        newSrc = this.src
                        img_src = newSrc
                        sessionStorage.clear();
                        sessionStorage.setItem('key',newSrc)
                        let data = sessionStorage.getItem('key')
                        console.log(data)
                        
                    }
                            
                        
                }



               
            }

            pickImg();
            
            let new_img = document.createElement('img');
            new_img.classList.add('icon');
            
            let images =  sessionStorage.getItem('key')
            new_img.setAttribute('src',images);
            
            

            // new_img.setAttribute('src',img_src);
            
         
            
          
            
            
            new_but.appendChild(new_img);

                        let new_img = document.createElement('img');
                        new_img.classList.add('icon');
                        // new_img.id = img_id;
                        new_img.setAttribute('src',newImg);
                        new_but.appendChild(new_img);
                    }
                    

            // let images = document.getElementsByClassName('icon');
            
            // document.addEventListener("click",function(event){
            //     if(event.target.classList.contains("catimg")){
            //         images.src = event.target.src;
            
            //     }
            // })

     

            let progress = document.createElement('p');
            progress.innerText = "0/";
            progress.id = 'progress'
            new_but.appendChild(progress)

            let time = document.createElement('p');
            time.innerText = slideValue;
            time.id = "time"
            new_but.appendChild(time)

            let del = document.createElement('p');
            del.innerText = "DELETE";
            del.id = "delete"
            new_but.appendChild(del)

            del.addEventListener('click',()=>{
                append.removeChild(new_but)
            } )


          console.log(new_img)
            
        
        }


       
                       


// let img = document.querySelectorAll('#new')
// for(let i=0; i < img.length; i++){
//     img.onclick = function (i){
//         alert(this)
//     }
// }

// let habits = document.querySelectorAll('.catimg > img');
// habits.forEach(cat => {
//     cat.addEventListener('click', ()=>{
//     alert(this.id)
// })
// })