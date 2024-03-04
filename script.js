document.querySelector(".nav-menu").addEventListener("click", () => {
  let navList = document.querySelector(".nav-list");

  if (navList.className === "nav-list") {
    navList.className += " display-flex";
  } else {
    navList.className = "nav-list";
  }
});

let papers = document.querySelectorAll(".paper-wrapper");

papers.forEach(paper => {
    paper.addEventListener('click', () => {
        let clickedClass = paper.classList[1];
        
        // Swap classes between the clicked paper and the first paper
        papers.forEach(paperElement => {
            if (paperElement.classList.contains('paper-1')) {
                paperElement.classList.remove('paper-1');
                paperElement.classList.add(clickedClass);
            } else if (paperElement.classList.contains(clickedClass)) {
                paperElement.classList.remove(clickedClass);
                paperElement.classList.add('paper-1');
            }
        });
    });
});