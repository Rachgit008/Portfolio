{/* <script>
const scrollPage = (btn) =>{
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    window.scrollTo({ top:atBottom ? 0 : document.body.scrollHeight });
    btn.textContent = atBottom ? 'Scroll Down' : 'Scroll Up';
}
</script> */}

//<!---------------------------------------- Script of A out Section ------------------------------------------------------->




//<!---------------------------------------- Script of header sticky scroll ------------------------------------------------------->

window.addEventListener('scroll', function(){
var header = document.querySelector('header');
header.classList.toggle('menus',window.scrollY>0); 
});


// <!---------------------------------------- Script of scroller ------------------------------------------------------->

const btn = document.getElementById(scrollBtn);

const scrollPage = () =>{
    const atBottom = isAtBottom();
    window.scrollTo({ top:atBottom ? 0 : document.body.scrollHeight });
};
const isAtBottom = () =>
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    
    //Update button text on scroll
window.addEventListener('scroll', () =>{
    if(!scrollBtn) return;
    const atBottom = isAtBottom();
   
    scrollBtn.textContent = atBottom ? 'Scroll Up' : 'Scroll Down';
});