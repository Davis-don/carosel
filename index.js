const slider=document.querySelector('.slider');
const leftArrow=document.querySelector('.left');
const rightArrow=document.querySelector('.right');
const indicatorParent=document.querySelector('.controls ul')

var sectionIndex=0;
document.querySelectorAll('.controls li').forEach(function(indicator,ind){
    indicator.addEventListener('click',function(){
        sectionIndex=ind;
        document.querySelector('.controls .selected').classList.remove('selected')
        indicator.classList.add('selected')
        slider.style.transform = 'translate(' + (sectionIndex) * (-25) + '%)';  
    })
})
rightArrow.addEventListener('click',function(){
    sectionIndex=(sectionIndex < 3) ?  sectionIndex + 1 : 3;
    document.querySelector('.controls .selected').classList.remove('selected')
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * (-25) + '%)';
})

leftArrow.addEventListener('click',function(){
    sectionIndex=(sectionIndex > 0) ?  sectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected')
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * (-25) + '%)';
})




















// let caroselCardOverallContainerHolder=document.querySelector('.coner-item-div');
// let index=0;

// let caroselData=[
//     {
//         imageItemSrc:'./assets/growtika-nGoCBxiaRO0-unsplash.jpg',
//         headingContent:'Content1',
//         paragraphText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae similique et aspernatur? Officiis nihil ullam perspiciatis molestiae animi fuga cumque expedita esse blanditiis voluptates, dignissimos deserunt itaque saepe hic?'

//     },
//     {
//         imageItemSrc:'./assets/IMG_0973-scaled.jpg',
//         headingContent:'Content2',
//         paragraphText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae similique et aspernatur? Officiis nihil ullam perspiciatis molestiae animi fuga cumque expedita esse blanditiis voluptates, dignissimos deserunt itaque saepe hic?'

//     },
//     {
//         imageItemSrc:'./assets/mapbox-pzFzd1AD8Ow-unsplash.jpg',
//         headingContent:'Content3',
//         paragraphText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae similique et aspernatur? Officiis nihil ullam perspiciatis molestiae animi fuga cumque expedita esse blanditiis voluptates, dignissimos deserunt itaque saepe hic?'

//     },
//     {
//         imageItemSrc:'./assets/trackshero',
//         headingContent:'Content4',
//         paragraphText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae similique et aspernatur? Officiis nihil ullam perspiciatis molestiae animi fuga cumque expedita esse blanditiis voluptates, dignissimos deserunt itaque saepe hic?'

//     },

// ];

// let htmlContent = `
//   <div class="carosel-card-ovearall">
//         <div class="image-card-holder">
//           <img class="carosel-img" src=${caroselData[index].imageItemSrc} alt="carosel-img"/>
//         </div>
//         <div class="carosel-text-box">
//           <h2 class="carosel-title">${caroselData[index].headingContent}</h2>
//           <p class="carosel-description-text">${caroselData[index].paragraphText}</p>
//         </div>
//       </div>`;

//   caroselCardOverallContainerHolder.innerHTML=htmlContent;
// let handleCarosel=(conditionStatus)=>{
// if (conditionStatus=="start"){
//     caroselCardOverallContainerHolder.innerHTML=htmlContent;
//     alert(index);
//         index=index+1;
    
// }
// else{
//     alert('heloo end')
// }
// }
