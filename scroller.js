{/* <script>
const scrollPage = (btn) =>{
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    window.scrollTo({ top:atBottom ? 0 : document.body.scrollHeight });
    btn.textContent = atBottom ? 'Scroll Down' : 'Scroll Up';
}
</script> */}

//<!---------------------------------------- Script of About Section ------------------------------------------------------->
    // const openBtn = document.getElementById("AbtModal");
    // const closeBtn = document.getElementById("closeModal");
    // const about = document.getElementById("AboutBx");

    // openBtn.addEventListener("click",() =>{
    //     about.classList.remove("hidden");
    //     about.classList.add("open");
    // });    
    
    // closeBtn.addEventListener("click",() =>{
    //     about.classList.add("hidden");  
    //     about.classList.remove("open");
    // }); 


    const openBtn = document.getElementById("AbtModal");
const closeBtn = document.getElementById("closeModal");
const about = document.getElementById("AboutBx");

openBtn.addEventListener("click", () => {
    about.classList.remove("hidden");
    setTimeout(() => {
        about.classList.remove("opacity-0", "translate-y-[-50px]");
        about.classList.add("opacity-100", "translate-y-0");
    }, 10); // Small timeout to trigger transition
});

closeBtn.addEventListener("click", () => {
    about.classList.remove("opacity-100", "translate-y-0");
    about.classList.add("opacity-0", "translate-y-[-50px]");
    setTimeout(() => {
        about.classList.add("hidden");
    }, 500); // After transition
});




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