const sobreMim = document.querySelector(".SobreMim .background");
const certificados = document.querySelector(".certificadosPage");


function showCertificados() {
    window.scrollTo(0, 10000);
    sobreMim.classList.toggle("hidden");
    window.scrollTo(0, 10000);
    certificados.classList.toggle("hidden");
}

function resetCertificados() {
    if (sobreMim.classList.contains("hidden")) {
        sobreMim.classList.toggle("hidden");
        certificados.classList.toggle("hidden");
    }
}

document.addEventListener("click", e => {
    let new_handle;
    if (e.target.matches(".new_handle")) {
        new_handle = e.target;
    } else {
        new_handle = e.target.closest(".new_handle");
    }
    if (new_handle != null) {
        new_onHandleClick(new_handle);
    }
});

function new_onHandleClick(new_handle) {
    const tabs = document.querySelectorAll(".tab_teste");
    const new_slider = document.querySelectorAll(".slider_teste")[0];
    const new_sliderIndex = parseInt(
        getComputedStyle(new_slider).getPropertyValue("--slider-index")
    );
    const tabsCount = tabs.length;
    if (new_handle.classList.contains("left-handle")) {
        if (new_sliderIndex - 1 < 0) {
            new_slider.style.setProperty("--slider-index", tabsCount - 1)
        } else {
            new_slider.style.setProperty("--slider-index", new_sliderIndex - 1)
        }
    }

    if (new_handle.classList.contains("right-handle")) {
        if (new_sliderIndex + 1 >= tabsCount) {
            new_slider.style.setProperty("--slider-index", 0)
        } else {
            new_slider.style.setProperty("--slider-index", new_sliderIndex + 1)
        }
    }
}
