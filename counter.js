const span = document.querySelector('span');
const btn = document.querySelectorAll('button');

let count = 0;

btn.forEach(b => {
   b.addEventListener('click', function(e) {
      let btnClass = e.target.classList;
      if(btnClass.contains('decrease')) {
        count--;
      }else if(btnClass.contains('increase')) {
         count++;
      }else{
          count = 0;
      }
       if(count > 0) {
       span.style.color = 'green';
       }
       if(count < 0) {
         span.style.color = 'red';
       }
       if(count === 0) {
         span.style.color = 'black';
       }
      span.textContent = count;
   })
})