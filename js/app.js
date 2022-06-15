const btn = document.getElementById('btn');
const labels = document.querySelectorAll('.form-control label');
const email = document.getElementById('email');
const password = document.getElementById('password');
const admin = document.getElementById('admin');
const user = document.getElementById('user');
// console.log(user);

labels.forEach((label)=>{
    // console.log(label);

    label.innerHTML=label.innerText
        .split('')
        .map((letter,index)=>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('');

});

admin.addEventListener('click',()=>{
    user.classList.remove('checked');
    admin.classList.add('checked');
});


user.addEventListener('click',()=>{
    admin.classList.remove('checked');
    user.classList.add('checked');
});

//Event Listener
btn.addEventListener('click',()=>{

    if(email.value === '' || password.value === ''){ 

    }else{
        if(admin.classList.contains('checked')){
            window.location.href = "https://homkham-code.github.io/admintemplateeg/";
        }else{
            window.location.href = "https://homkham-code.github.io/landingpage/";
        }
    }
    
});
