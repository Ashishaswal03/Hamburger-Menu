
console.log('hello');
const NavSection=document.querySelector('.nav-section')
const Bars = document.querySelector('.hamburger-menu')
const CancelBtn=document.querySelector('.cross-icon')
Bars.addEventListener('click', (event) => {
    event.stopPropagation();
    document.querySelector('.nav-section').style.display = 'flex';
    
    
})
CancelBtn.addEventListener('click', () => {
    document.querySelector('.nav-section').style.display = 'none';
})
NavSection.addEventListener('click', (e) => {
    e.stopPropagation();
})
window.addEventListener('click', (event) => {
    
        document.querySelector('.nav-section').style.display = 'none';
      
})