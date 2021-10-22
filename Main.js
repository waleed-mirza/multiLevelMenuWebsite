(function () {
  var resizeCheck = 1;
  function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }

  function func() {
    const hr = document.createElement("span");
    const header = document.querySelector("header");
    const headerimg = header.querySelector("a");

    header.classList.add("navtop");
    hr.classList.add("righthamburger");

    insertAfter(hr, headerimg);

    const lastcheck1 = document.querySelectorAll(
      "main > aside > div > nav > ul > li"
    );

    for (let j = 0; j < lastcheck1.length; j++) {
      const atagscroll1 = lastcheck1[j].querySelectorAll("a");
      for (let i = 0; i < atagscroll1.length; i++) {
        atagscroll1[i].addEventListener("click", (e) => {
          setTimeout(() => {
            let element = e.target;
            element.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }, 10);
        });
      }
    }

    const rightclick = document.querySelector(".righthamburger");
    const rightmenu = document.querySelector("aside");

    rightclick.addEventListener("click", (e) => {
      rightmenu.classList.toggle("opensubmenu");
    });

    const rightPartition = document.querySelector("aside");
    const rightList = rightPartition.querySelectorAll("li");
    const rightul = rightPartition.querySelectorAll("ul");

    for (let i = 0; i < rightList.length; i++) {
      for (let j = 0; j < rightul.length; j++) {
        if (rightList[i].contains(rightul[j])) {
          rightList[i].classList.add("arrowRight");
        }
      }
    }

    function resizing() {
      const Lists = document.querySelectorAll("li");
      for (let i = 0; i < Lists.length; i++) {
        if (window.innerWidth > 989) {
          resizeCheck = 1;
          Lists[i].addEventListener("mouseover", (e) => {
            if (resizeCheck === 1) {
              e.target.classList.add("open");
            }
            if (e.target.querySelector("ul")) {
              e.target.querySelector("ul").classList.add("hover-fix");
            }
          });

          Lists[i].addEventListener("mouseleave", (e) => {
            if (resizeCheck === 1) {
              e.target.classList.remove("open");
            }
            if (e.target.querySelector("ul")) {
              e.target.querySelector("ul").classList.remove("hover-fix");
            }
          });
        } else {
          Lists[i].firstElementChild.addEventListener("click", (e) => {
            e.target.classList.toggle("open");
          });
        }
      }

      if (window.innerWidth < 988) {
        resizeCheck = 0;
        const allitem = document.querySelectorAll("li");
        const main = document.querySelector("main");
        const atags = main.querySelectorAll("a");

        for (let i = 0; i < allitem.length; i++) {
          check1 = allitem[i].getElementsByTagName("ul");

          for (let k = 0; k < check1.length; k++) {
            check1[k].style.display = "none";
          }
        }
        for (let i = 0; i < atags.length; i++) {
          atags[i].addEventListener("click", (e) => {
            e.preventDefault();
            link = e.target.getAttribute("href");
            if (link === "#") {
              const nextlist = e.target.nextElementSibling;
              e.target.parentNode.classList.toggle("open");
              if (nextlist.style.display === "none") {
                nextlist.style.display = "block";
              } else {
                nextlist.style.display = "none";
              }
              e.stopPropagation();
            } else {
              window.location.href = link;
            }
          });
        }
      }
    }

    resizing();

    window.addEventListener("resize", (e) => {
      resizing();
    });
  }
  func();
})();
