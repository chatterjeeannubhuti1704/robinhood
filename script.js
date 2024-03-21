const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements =document.querySelectorAll('.hidden');
const hiddenGrids= document.querySelectorAll(".hidden-grd");
const hiddenhero= document.querySelectorAll(".hidden-hero");
hiddenElements.forEach((el)=> observer.observe(el));
hiddenGrids.forEach((ele)=> observer. observe(ele));
hiddenhero.forEach((ele)=> observer. observe(ele));