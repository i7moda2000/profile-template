const darkFont   = "#fff";
const darkBg     = "#1f1f1f ";
const lightFont  = "#000";
const lightBg    = "#f5f5f5";









function themeToggle() {


	if(window.localStorage.getItem("theme") === "dark" ){


		lightTheme();

	}
	else {

		darkTheme();

	}






}



function darkTheme() {

	document.querySelector("#theme-btn").classList.remove("bi-moon-fill");
	document.querySelector("#theme-btn").classList.add("bi-brightness-high-fill");

	window.localStorage.setItem("theme","dark");

	document.body.style = `background-color:${darkBg};color:${darkFont};`;
	document.querySelectorAll("a").forEach((el) =>  {

	el.style = `color:${darkFont};`;


	} )


}


function lightTheme() {

	document.querySelector("#theme-btn").classList.remove("bi-brightness-high-fill");
	document.querySelector("#theme-btn").classList.add("bi-moon-fill");


	window.localStorage.setItem("theme","light");

	document.body.style = `background-color:${lightBg} ;color:${lightFont};`;
	document.querySelectorAll("a").forEach((el) =>  {

	el.style = `color:${lightFont};`;


	} )


}
const btn = document.querySelector(".back-to-top-btn")


function scrollFunction() {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
	  btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
  }







document.querySelector("#theme-btn").addEventListener("click", themeToggle);

const openBtn = document.querySelector(".open-btn").addEventListener("click",() => {

	document.querySelector(".phone-nav-list").style.width = "300px"
	openBtn.style.display = "none"


})
document.querySelector(".close-btn").addEventListener("click",() => {

	document.querySelector(".phone-nav-list").style.width = "0"


})


if(window.localStorage.getItem("theme") === "light"){

	lightTheme();
}
else {
	
	darkTheme();
}



window.onscroll = () => {scrollFunction()};

btn.onclick = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




document.querySelector(".main-head div").addEventListener("click",() => {


document.querySelector(".work-box-cont").scrollIntoView()

})


