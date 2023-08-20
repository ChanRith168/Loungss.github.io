document.getElementById("btn_submit").addEventListener('click',()=> {
    const txt = document.getElementById('word');
    const number = document.getElementById("num");
    var getResult = ' ';
    var nonetag = ' ';
    console.log(txt.value);
    console.log(number.value);
    if(txt.value != "" && number.value != ""){
        if(number.value <= 0) {
            $(document).ready(function() {
                swal({
                    title: "Your Number less than 1!",
                    text: "Please input number bigger than 0!",
                    icon: "error",
                    button: "Try again!",
                  });              
              });
        }else{
            for( let i = 1; i <= number.value; i++) {
                getResult += `<h5>${i+" "+txt.value}</h5>`;
                nonetag += i + " " + txt.value + "\n";
            }
            document.getElementsByClassName("result")[0].innerHTML =  `<button id="btn_copy" class="btn btn-primary float-end"><i class="fa-solid fa-clone"></i> Copy</button>`  + getResult;
             document.getElementById("btn_copy").addEventListener('click',()=> {
                navigator.clipboard.writeText(nonetag);
                document.getElementById("btn_copy").innerHTML = `<i class="fa-solid fa-clone"></i> Coped!`;
            })
        }
    }else {
          $(document).ready(function() {
            swal({
                title: "Please Complet form!",
                text: "complet any word and number!",
                icon: "error",
                button: "Try again!",
              });              
          });
    }
})

 document.getElementById("btn_refresh").addEventListener('click',()=> {
    document.getElementsByClassName("result")[0].innerHTML =  "";
    document.getElementById("word").value = "";
    document.getElementById("num").value = "";
 });