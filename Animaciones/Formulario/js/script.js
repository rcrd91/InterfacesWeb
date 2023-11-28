const $d = document;

let $inputs = $d.querySelectorAll("input");




$inputs.forEach(element=>{

    element.addEventListener ("input", e =>{

        let regex = new RegExp (e.target.pattern)
    console.log(regex)
    if(!regex.test(e.target.value)) {
        e.target.classList.add("invalid")
    }
    else{
       e.target.classList.remove("invalid")

    }

})})