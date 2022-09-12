let nav, navList, lis, totalNavList;

if (window.innerWidth <= 500 ) {
    nav = document.querySelector(".mobileMenu"),
    navList = Array.prototype.slice.call(document.querySelectorAll(".name")),
    lis = Array.prototype.slice.call(nav.querySelectorAll("li"));
    navList.push.apply(navList, lis);
    totalNavList = navList.length;
} else {
    nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
}

const allSections = document.querySelectorAll(".section"),
    totalSections = allSections.length;
    
console.log(allSections);

for (let i = 0; i < totalNavList; i++) {
    removeBackSection();
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let i = 0; i < totalSections; i++) {
            allSections[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);    
            }
            navList[j].querySelector("a").classList.remove("active");    
        }
        this.classList.add("active")
        showSection(this);
    })
}

function addBackSection(num) {
    allSections[num].classList.add("back-section");
}

function removeBackSection() {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("back-section");
    }
}

function showSection(element) {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");   
        }
    }
}

const logo = document.querySelector(".name_picture");
logo.addEventListener("click", () => {
    const newnav = document.querySelector(".mobileMenu"),
    newnavList = Array.prototype.slice.call(document.querySelectorAll(".name")),
    newlis = Array.prototype.slice.call(newnav.querySelectorAll("li"));
    newnavList.push.apply(newnavList, newlis);
    const newtotalNavList = newnavList.length,
    newallSections = document.querySelectorAll(".section"),
    newtotalSections = newallSections.length;
    const homepage = document.querySelector(".HomePage");

    for (let i = 0; i < newtotalSections; i++) {
        newallSections[i].classList.remove("back-section");
    }
    for (let j = 0; j < newtotalNavList; j++) {
        if (newnavList[j].querySelector("a").classList.contains("active")) {
            addBackSection(j);    
        }
        newnavList[j].querySelector("a").classList.remove("active");    
    }
    document.querySelector(".name").querySelector("a").classList.add("active")
    showSection(homepage);
});

document.querySelector(".contact-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});


