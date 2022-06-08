let questions=[{question:"lequel est un framework js?",
correct:"d",
a:"laravel",
b:"django",
c:"spring",
d:"vue",},
{question:"lequel est un framework backend?",
correct:"c",
a:"angular",
b:"react_native",
c:"node",
d:"react"},
{question:"Dans quel balise HTML plaçons-nous le code JavaScript?",
correct:"c",
a:"la balise js",
b:"la balise javascript",
c:"la balise script",
d:"la balise rel"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"b",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"},
{question:"Comment créer une fonction en JavaScript?",
correct:"a",
a:"function f() ",
b:"function=f()",
c:"function:f()",
d:"aucune bonnereponse"}
];

//variables de la page d'accueil
const body=document.getElementById("body");
let page_accueil=document.getElementById("accueil");
const form=document.querySelector("form");

const title_home=document.getElementById("title_accueil");

const Nom=document.getElementById("nom");
const Mail=document.getElementById("mail");
let error_name=document.querySelector(".error_name");
let error_mail=document.querySelector(".error_mail");
let bouton_start=document.querySelector("#start");

//variables questionnaire
const questionnaire=document.getElementById("questionnaire");
const progress_bar=document.querySelector("#the_bar");
const bouton_quitter=document.getElementById("quit");
const bouton_suivant=document.getElementById("next");

const assertions=document.querySelectorAll(".assertions");
let content_question=document.getElementById("content_question");
let the_question=document.getElementById("question_tag");
const question_tag=document.getElementById("question_tag");
const input_answerEls=document.querySelectorAll(".radio");
const input_a=document.querySelector("#a");
const input_b=document.querySelector("#b");
const input_c=document.querySelector("#c");
const input_d=document.querySelector("#d");
let assertion_a=document.querySelector("#assertion1");
let assertion_b=document.querySelector("#assertion2");
let assertion_c=document.querySelector("#assertion3");
let assertion_d=document.querySelector("#assertion4");

const a_option=document.getElementById("a_text");
const b_option=document.getElementById("b_text");
const c_option=document.getElementById("c_text");
const d_option=document.getElementById("d_text");

let page_en_cours=document.querySelector("#page_en_cours");
let time=60;
let timer_element=document.getElementById("timer");
   
let question_count=0;
let question_number=1;
page_en_cours.innerText=1;
let counter;
let user_score=0;
let bar_progress=0;

//page result
const page_result=document.querySelector("#result");

const pin_name=document.createElement("div");
page_result.appendChild(pin_name);
pin_name.textContent=localStorage.getItem("nom");
pin_name.classList.add("nom_utilisateur");

const pin_email=document.createElement("div");
page_result.appendChild(pin_email);
pin_email.textContent=localStorage.getItem("email");
pin_email.classList.add("mail_utilisateur");

const icon_content=document.createElement("div");
page_result.appendChild(icon_content);
icon_content.classList.add("affichage_result");
icon_content.style.display="grid";

let icon_result=document.createElement("img");
icon_content.appendChild(icon_result);
icon_result.classList.add("icone_result"); 

let score_tag=document.createElement("div");
page_result.appendChild(score_tag);
score_tag.classList.add("score");
score_tag.style.display="grid";//


const btn_content=document.createElement("div");
page_result.appendChild(btn_content);

const bouton_accueil=document.createElement("button");
btn_content.appendChild(bouton_accueil);
bouton_accueil.classList.add("home");
bouton_accueil.textContent="Accueil";
 
page_result.style.display="none";

let user_answer=select_answer();
let mask_mail=/@gmail.com$/;
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(Nom.value=="" && Mail.value==""){

        error_name.innerText="veuillez saisir un nom!";
     
        error_mail.innerText="veuillez saisir un mail"
        console.log(error_name);
    
        Nom.style.borderColor="red";
      }
    else if(Nom.value.length<2){
        error_name.innerText="veuillez saisir un nom avec plus de deux lettres!";
        Nom.style.borderColor="red";
    }
    else if(!mask_mail.test(Mail.value)){
        error_name.innerText="veuillez saisir une adresse mail correct";        
        Nom.style.borderColor="red";
    }
    else{
     
        error_name.style.display="none";
        form.style.display="none";
        title_home.style.display="none";
        Nom.style.display="none";
        Mail.style.display="none";
        bouton_start.style.display="none";

    const Name=Nom.value;
    const Email=Mail.value;

    localStorage.setItem('nom',Name);
    localStorage.setItem('email',Email);
   
    questionnaire.style.display="block";
    bouton_suivant.style.backgroundColor="#d1f9cd";
    gauge_bar(0);
    print_questions(0);
    timer_manager(60);
   
    if(user_answer==questions[0].correct){
        user_score=1;
    }
    for(i=0;i<4;i++){
      input_answerEls[i].addEventListener('click', function(e){
           bouton_suivant.style.backgroundColor="#028A3D";       
      })}                                                                                          
    page_en_cours.innerText=1;
        
    }
    
    //evenement sur le bouton quitter
    bouton_quitter.addEventListener('click', function(){ 
        questionnaire.style.display="none";
        page_result.style.display="grid";
        if (user_score < questions.length/2){icon_result.src="fail.webp"}
        else{icon_result.src="right.webp"}
        
        score_tag.innerHTML=`<span class="score">${user_score}/${questions.length}</span>`
       
        bouton_accueil.addEventListener("click", function(){
            window.location.reload();
      })
    })
});

    //evenement sur le bouton suivant
bouton_suivant.addEventListener('click', function(){
         
        user_answer=select_answer();
        
        if(user_answer){
            if(user_answer===questions[question_count].correct){
                user_score++;
            }
            
        }
        if(question_count < (questions.length-1)){
            bouton_suivant.style.backgroundColor="#d1f9cd";
            
            deselectAnswers()
            question_count++;
            question_number++;
            clearInterval(progress_count);
            clearInterval(counter);
            gauge_bar(bar_progress);
            print_questions(question_count);
            timer_manager(60);
            for(i=0;i<4;i++){
                input_answerEls[i].addEventListener('click', function(e){
                     bouton_suivant.style.backgroundColor="#028A3D";
              })}
            page_en_cours.innerText++;
            
      }
              else {
            questionnaire.style.display="none";
            page_result.style.display="grid";
            if (user_score<questions.length/2){icon_result.src="fail.webp"}
            else{icon_result.src="right.webp"}
            score_tag.innerHTML=`<span class="score">${user_score}/${questions.length}</span>`
        
            bouton_accueil.addEventListener("click", function(){
                window.location.reload();
            })
        }
        if(question_count==questions.length-1){bouton_suivant.textContent="Terminer";}
 
        
        } )

    
      

//FONCTIONS UTILISEES
//fonction d'affichage des questions
function print_questions(index){
    //creation des élements html du questionnaire
    const current_quiz_elts=questions[index];

    question_tag.innerText=current_quiz_elts.question;
    a_option.innerText=current_quiz_elts.a;
    b_option.innerText=current_quiz_elts.b;
    c_option.innerText=current_quiz_elts.c;
    d_option.innerText=current_quiz_elts.d;

    
}

//fonction pour le timer
function timer_manager(time){
    counter=setInterval(timer,1000);
    function timer(){
        timer_element.innerText=time;
        time--;
        if(time==0){
            clearInterval(counter);
            
            bouton_suivant.click();
            
        }
    }
}

//fonction pour le progress bar
let j=0;
let progress_count;

function gauge_bar(time){
    progress_count=setInterval(timer,600);
    function timer(){
        time += 1;
        progress_bar.style.width=time + "px";
        if(time > 400){
            clearInterval(progress_count);
            bouton_suivant.click();
        }
    }
}
//fonction selection des réponses

function select_answer() {
    let rep;
    input_answerEls.forEach(input_answerEl => {
        if(input_answerEl.checked) {
            rep = input_answerEl.id;
        }
    })
    return rep
            
}

function deselectAnswers(){
    input_answerEls.forEach(input_answerEl => input_answerEl.checked =false )
}



