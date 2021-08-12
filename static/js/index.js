const CarrSli = document.querySelector(".CarrSli");
const CarrIma = document.querySelector(".CarrSli img");

const Prev = document.querySelector("#Ant");
const Next = document.querySelector("#Des");

let Counter = 1;

const size = CarrIma[0].clientWidth;
CarrSli.style.transform = "translateX(" + (-size * counter) + "px)";

Next.addEventListener("click",()=>{

    if(Counter <= 0)
        return ;
    CarrSli.style.transition = "transform 0.4s ease-in.out";
    Counter ++;
    CarrSli.style.transition = "translateX(" + (-size * counter) + "px)";
    console.log(Counter)
});

Prev.addEventListener('click',()=>{

    CarrSli.style.transition = "transform 0.4s ease-in.out";
    Counter --;
    CarrSli.style.transition = "translateX(" + (-size * counter) + "px)";
    console.log(Counter)

});

CarrSli.addEventListener('transitionend',()=>{

    if(CarrIma[Counter].id === 's2C')
    {
        CarrSli.style.transform = 'none'
        Counter = CarrIma.length - 2;
        CarrSli.style.transition = "translateX(" + (-size * counter) + "px)";
    }
    
    if(CarrIma[Counter].id === 's1C')
    {
        CarrSli.style.transform = 'none'
        Counter = CarrIma.length - Counter;
        CarrSli.style.transition = "translateX(" + (-size * counter) + "px)";
    }

});