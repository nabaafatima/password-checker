const user =  document.querySelector('.in');
const c =  document.getElementById('comments')
let rejections= [
    "WHY WOULD YOU GIVE ME YOUR PASSWORD DUMBO!?",
    "Is this the only thing you can think of?",
    "Are you a 3rd grader?",
    "Look this is what happpens when you watch too much instagram",
    "Do you even know what password means?",
    "do you want to save your account from your cat!?",
    "It's so basic, even the neighborhood cat could guess it just by walking across your keyboard.",
    "did you forget the concept of 'using brain'?"
]
function check() {
    if (user.value.trim==="") {
        alert("enter a password")
    } else{
        c.textContent  = rejections[Math.floor(Math.random()*rejections.length)]
    }
}

