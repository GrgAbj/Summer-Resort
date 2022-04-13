
function changeLoc(){
    var x = document.getElementById("resortName").value ;

if(x=="Eddeh Sands"){
    document.getElementById("loc").value="Jbeil";
}
if(x=="Oceana"){
    document.getElementById("loc").value="Damour";
} 
if(x=="Bamboo Bay"){
    document.getElementById("loc").value="Jiyye";
}
}
    

    
  

 

function clearAll(){
        var sure = confirm("Are you sure you want to clear?");
        if (sure) {
            parent.frame3.document.getElementById('login').value= "";
            parent.frame3.document.getElementById('pass').value= "";
            parent.frame3.document.getElementById('confirmed').value= "";
            parent.frame3.document.getElementById('cmnts').value= "";
            parent.frame2.document.getElementById('resortName').value="";
            parent.frame2.document.getElementById('loc').value="";
            parent.frame2.document.getElementById('onemo').checked=false;
            parent.frame2.document.getElementById('threemo').checked=false;
            parent.frame2.document.getElementById('oneye').checked=false;
            parent.frame2.document.getElementById('cabinet').checked=false;
            parent.frame2.document.getElementById('chalet').checked=false;
            parent.frame2.document.getElementById('others').checked=false;
            parent.frame2.document.getElementById('opt').value="";
            parent.frame4.document.getElementById("para").innerHTML="";
        }
        else {
            alert('Data still saved')
        }
    }
    function submit(){
  

        var login =parent.frame3.document.getElementById("login").value ;
        var pass =parent.frame3.document.getElementById("pass").value
        var confirmed =parent.frame3.document.getElementById("confirmed").value ;
    
        var resort =parent.frame2.document.getElementById("resortName").value;
    
    
        var member1 =parent.frame2.document.getElementById("onemo").checked ;
        var member2 =parent.frame2.document.getElementById("threemo").checked ;
        var member3 =parent.frame2.document.getElementById("oneye").checked ;
        var member4 =parent.frame2.document.getElementById("others").checked ;
        if(member1==true)
        var m= "1 month";
        if(member2==true)
        var m= "3 months";
        if(member3==true)
        var m= "1 year";
        if(member4==true)
        var m = parent.frame2.document.getElementById("opt").value;

        var choice1 =parent.frame2.document.getElementById("cabinet").checked;
        var choice2 =parent.frame2.document.getElementById("chalet").checked;
        
       
        if(choice1==true) 
        var ch="Chalet"
        if(choice2==true) 
        var ch="Cabinet"
    
    
       if(login==""||pass==""||confirmed==""||resort==""||member1==false&&member2==false&&member3==false&&member4==false||choice1==false&&choice2==false){
    
        alert('Kindly fill all the required information!');
       }
    
     else  if(pass!=confirmed){
       alert("Password do not match");
    }
    
     else{
    
    
     
    parent.frame4.document.getElementById("para").innerHTML="Dear Mr/Mrs "+login+", You have chosen to spend the best "+m+" of your life in one of our most beautiful resorts of Lebanon, "+ch+" .In order to provide you with more details, please login-in to our site using your username: "+login+" and password: "+pass+". Thank you for choosing "+resort+" to spend your vacation"
     } 
    }

function tata (){
    document.getElementById("opt").disabled=false;
}
function tata1 (){
    document.getElementById("opt").disabled=true;
}
function tata2 (){
    document.getElementById("opt").disabled=true;
}
function tata3 (){
    document.getElementById("opt").disabled=true;
}



 