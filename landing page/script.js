const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstpageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration: 1.5,
        ease:Expo
    })

    t1.to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration: 2,
        stagger:.2,
        delay:-1
    })

    t1.from("#herofooter",{
        y:'-10',
        opacity:0,
        duration: 1.5,
        delay:-1.4,
        ease:Expo.easeInOut
    })
}

var timeout;


function mouseskew(){
    //define default scale value
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;


    window.addEventListener("mouseover",function(dets){
        clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        
        xscale=gsap.utils.clamp(.9,1.1,xdiff);
        yscale= gsap.utils.clamp(.9,1.1,ydiff);

        xprev=dets.clientX;
        yprev=dets.clientY;

        circleMouseFollower(xscale,yscale);
        timeout=setTimeout(function(){
            this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        },100)

    })
}



function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
circleMouseFollower();
firstpageAnim();
mouseskew();



// teeno element ko select karo, uske baad teeno par ek mousemove lagao,jab mousemoive ho ye pata karo ki mouse kaha par hai,
// jiska matlab hai ki x and y position pata karo, ab mouse ki x y position ke badle use image ko show karo and us image ko move karo,
// move karte waqt rotate karo, and jaise mouse tez chale waise waise rotation bhi tez ho jaye


document.querySelectorAll(".elem").forEach(function(elem){

    var rotat=0;
    var diffrot=0
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3
        });
    });

    elem.addEventListener("mousemove",function(dets){
        
        diffrot=dets.clientX - rotat;
        rotat=dets.clientX;


        var diff=dets.clientY - elem.getBoundingClientRect().top;
         
        
       
        gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20,20 ,diffrot)
       });
    });
});

// document.querySelectorAll(".elem").forEach(function(elem){
//     elem.addEventListener("mousemove", function(dets){
//         var diff = dets.clientY - elem.getBoundingClientRect().top;
        
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power1,
//             top: diff,
//             left: dets.clientX
//         });
//     });
// });

