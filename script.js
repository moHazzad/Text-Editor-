function changeFontStyle(e){
    const textStyle = document.querySelector('#textArea')
    if(e.target.id === 'bold'){
        e.target.classList.toggle('active')
        textStyle.classList.toggle('bold')
    }
    if(e.target.id === 'italic'){
        e.target.classList.toggle('active')
        textStyle.classList.toggle('italic')
    }
    if(e.target.id === 'underline'){
        e.target.classList.toggle('active')
        textStyle.classList.toggle('underline')
    }
}

function textAlignment(e){
    const textAlignment = document.querySelector('#textArea')
    if(e.target.id === 'start'){
        e.target.classList.toggle('active')
        textAlignment.classList.toggle('start')
    }
    if(e.target.id === 'center'){
        e.target.classList.toggle('active')
        textAlignment.classList.toggle('center')
    }
    if(e.target.id === 'end'){
        e.target.classList.toggle('active')
        textAlignment.classList.toggle('end')
    }
}

const btnAction = document.querySelector('.btnAction')
btnAction.addEventListener('click',changeFontStyle)

const textAction = document.querySelector('.textAction')
textAction.addEventListener('click',textAlignment)



function fontSize() {
    var size = document.getElementById('fontSize').value;
    console.log(size);
    document.getElementById("textArea").style.fontSize = size + "px";
}


let txtNumber = document.getElementById('fontSize');
let txtOutput = document.getElementById('textArea');
txtNumber.addEventListener("change", function myf(){
  txtOutput.style.fontSize = txtNumber.value + "px";
});

function myColor() {   
    var color = document.getElementById('colorPicker').value;  
    document.body.querySelector('#textArea').style.color = color;   
    document.getElementById('box').value = color;
}


document.getElementById('colorPicker').addEventListener('input', myColor);


