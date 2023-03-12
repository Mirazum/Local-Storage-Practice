const deleteName =document.getElementById('delete-name');
const sendName =document.getElementById('send-name');
const deleteEmail =document.getElementById('delete-email');
const sendEmail =document.getElementById('send-email');
const deleteMessage =document.getElementById('delete-message');
const sendMessage =document.getElementById('send-meassage');
const sendAll =document.getElementById('sendall');
const resetAll =document.getElementById('reset');

sendName.addEventListener('click',()=>{
    const name= document.getElementById('namefield').value;
    document.getElementById('namefield').value="";
    localStorage.setItem('name:', name)

})
sendEmail.addEventListener('click',()=>{
    // console.log('Send Name')
    const email=document.getElementById('emailfield').value;
    document.getElementById('emailfield').value="";
    // console.log(email)
    localStorage.setItem('email:',email)
 })
 sendMessage.addEventListener('click',()=>{
    // console.log('Send Name')
    const message=document.getElementById('messagefield').value;
    document.getElementById('messagefield').value="";
    // console.log(Message)
    localStorage.setItem('message:',message)
 })

 deleteName.addEventListener('click',()=>{
    localStorage.removeItem('name:')
 })
 deleteEmail.addEventListener('click',()=>{
    localStorage.removeItem('email:')
 })
 deleteMessage.addEventListener('click',()=>{
    localStorage.removeItem('message:')
 })

 resetAll.addEventListener('click',()=>{
    console.log('reset')
    localStorage.removeItem('name:')
    localStorage.removeItem('email:')
    localStorage.removeItem('message:')
})
sendAll.addEventListener('click',()=>{
    console.log('Send all')
    const Name_=document.getElementById('namefield').value;
    const Email_=document.getElementById('emailfield').value;
    const Message_=document.getElementById('messagefield').value;

    let user={
        Name: Name_,
        Email: Email_,
        Message: Message_
    }
    let User_=JSON.stringify(user);
    localStorage.setItem('user',User_);
 })
 const name=document.getElementById('namefield');
 const email=document.getElementById('emailfield');
 const message=document.getElementById('messagefield');
//  Get output from the local storage and showing in the console
 const GetFromLocalStorage=()=>{
    const userInfo=localStorage.getItem('user');
    const UserDetail=JSON.parse(userInfo);
    name.value=UserDetail.name;
    email.value=UserDetail.email;
    message.value=UserDetail.message;
    console.log(UserDetail)
 }
 
  GetFromLocalStorage();