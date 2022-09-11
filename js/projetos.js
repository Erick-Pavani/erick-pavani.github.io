if (window.innerWidth <= 500 ) {
    
    const projetos = document.querySelectorAll(".projects_box");
    
    projetos.forEach(projeto => {
        
        projeto.addEventListener("click", function() {
            projeto.querySelectorAll("a").forEach(link => {
                setTimeout(function () {
                    link.style.pointerEvents = "auto";
                }, 500)
            })
        })
        
        projeto.addEventListener("mouseleave", function() {
            projeto.querySelectorAll("a").forEach(link => {
                link.style.pointerEvents = "none";
            })
        })
    });
}