const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const button=document.querySelector('.menu'),nav=document.querySelector('nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.toc a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav')?.classList.remove('open')));
