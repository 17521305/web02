function validateForm() {
    var filter1=/[a-zA-Z0-9]+$/
    var filter2=/[a-zA-Z0-9\@]+$/
    var name = document.forms["form"]["name"].value;
    var password = document.forms["form"]["password"].value;
    const form=document.getElementById('form');
    
    if(name=="" || password==""){
      alert('Không được bỏ trống các trường.')
      return;
    }
    if(!filter1.test(name)) {
      alert("Họ Tên không được chứa kí tự đặc biệt.");
      return;
    }
    if(!filter2.test(password)) {
      alert("Mật khẩu không được chứa kí tự đặc biệt khác @.");
      return;
    }
    if(name.match(/\s/g) || password.match(/\s/g)){
      alert('Họ Tên và Mật khẩu không được chứa khoảng trắng.');
      return;
    }
    if(name=='lonelylong' && password=='uit'){
      Redirect();
      return;
    }
    aftervalidation();
  }
  function aftervalidation(){
    const hint1=document.getElementById('hint1');
    const hint2=document.getElementById('hint2');
    let message1=[];
    let message2=[];
    message1.push('Nếu đã test form này chán rồi thì nhập như sau để vào xem mấy cái đồng hồ:');
    hint1.innerText=message1.join(', ');
    message2.push('Họ Tên: lonelylong'+'\n'+'Mật khẩu: uit');
    hint2.innerText=message2.join(', ');
  }
  function Redirect() {
    window.location="../clock.html";
 }