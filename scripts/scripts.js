
let nav = document.querySelector('.nav');

function openNav(){
    //alert butto clicked);
    if(nav.style.left == '-500px'){
        nav.style.left = '0'; 
    }else{
        nav.style.left = '-500px';
    }
}

