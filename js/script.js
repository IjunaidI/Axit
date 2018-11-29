let tabContainer = document.querySelector('.all-tabs');
for (i = 0; i < contentOfTabs.length; i++) {
	tabContainer.innerHTML += `<div class="tabs-content tc${i + 1}">${contentOfTabs[i]}</div>`;
}
document.querySelector(`.tc1`).classList.add('display-block');
for (i = 0; i < contentOfTabs.length; i++) {
    document.querySelector('.tabs-container').innerHTML += ` 
    <li class="tab t${i+1}" onclick="changeTab('t${i + 1}','tc${i + 1}')">
        <h2>TAB ${i + 1}</h2>
    </li>`
}
document.querySelector(`.t1`).classList.add('active');

function changeTab(tabNum, tabContent) {
	for (i = 0; i < contentOfTabs.length; i++) {
		document.querySelector(`.t${i + 1}`).classList.remove('active');
	}
	for (i = 0; i < contentOfTabs.length; i++) {
		document.querySelector(`.tc${i +1}`).classList.remove('display-block');
	}
	document.querySelector(`.${tabContent}`).classList.add('display-block');
	document.querySelector(`.${tabNum}`).classList.add('active');
}
$('.my-slider').slick({
	prevArrow: null,
	nextArrow: null,
});
 function switchMenu(){
	 let humburger = document.querySelector(".humburger");
	 let cross = document.querySelector(".cross");
	 let navbar = document.querySelector(".navbar");
	 humburger.classList.toggle("display-none");
	 cross.classList.toggle("display-block");
	 navbar.classList.toggle("display-block");
 }