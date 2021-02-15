function notify(message) {
  let text = document.getElementById('notification');
  
  text.textContent = message;
  text.style.display = 'block';
  
  text.addEventListener('click', (e)=>{
    let tar = e.target;
    tar.style.display = 'none';
  })
}