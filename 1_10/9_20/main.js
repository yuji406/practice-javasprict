//document.getElementById("text").style.color="red";

//document.getElementById("h1").style.color="red";

function changeColor(){
    document.getElementById("text").style.color="red";
}

let count = 0;

function increaseCount(){
    
    count++;
    document.getElementById("counter").innerText=count;
}
function herasu(){
    count--;
    document.getElementById("counter").innerText=count;
}
function reset(){
    count=0;
    document.getElementById("counter").innerText=count;
}


//document.getElementById("text").style.color="red";
/* これはドキュメントの中の「TEXT」というIDを持っている
タグのすたいるをあかにしてください*/ 