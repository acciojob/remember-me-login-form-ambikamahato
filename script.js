//your JS code here. If required.
//your JS code here. If required.

let username=document.getElementById('username');
let password=document.getElementById('password');
let checkBox=document.getElementById('checkbox');

document.getElementById('submit').addEventListener('click',(event)=>{
     event.preventDefault();

    if(checkBox.checked===true){
        console.log(true);
        if(username.value.length>0 && password.value.length>0){
             let info={
                username:username.value,
                password:password.value
             }
            localStorage.setItem('userCredentials',JSON.stringify(info));
            alert(`Logged in as ${username.value}`);
            console.log(info);
        }
    }
    else{
        console.log(false);
        alert(`Logged in as ${username.value}`);
    }
})

let storedInfo=JSON.parse(localStorage.getItem('userCredentials'));

if(storedInfo){
    let existingButton=document.createElement('button');
    existingButton.id='existing';
    existingButton.innerText='Login as existing user';
    existingButton.addEventListener('click',()=>{
        alert(`Logged in as ${storedInfo.username}`);
    })

    document.getElementsByTagName('form')[0].append(existingButton);
}