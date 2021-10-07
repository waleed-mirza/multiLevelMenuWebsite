(function () {
  // add the video class to the iframe ---start---
  const video = document.querySelector("#YoutubeVideo-1");
  video.parentElement.classList.add("video");
  // add the video class to the iframe ---end---

  // insert a element after another element ---start---
  // this function requires 2 parameters (newElement) the element to be inserted (targetElement) the element after which we want to insert another element
  function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }
  // insert a element after another element ---end---

  function func() {
    // making 2 hamburgers to insert into the header ---start---
    const hr = document.createElement("span");
    const hl = document.createElement("span");
    const header = document.querySelector("header");
    const headerimg = header.querySelector("a");

    header.classList.add("navtop");
    hl.classList.add("righthamburger");
    hr.classList.add("lefthamburger");

    header.insertBefore(hl, headerimg); //here uses the insertBefore to insert a element before a specific element
    insertAfter(hr, headerimg); //uses the insertAfter function that defined before
    // making 2 hamburgers to insert into the header ---end---

    // For scrolling to the last list item from the left partition when click ---start---
    const lastcheck = document.querySelectorAll(
      ".LeftPartition > .LeftPartitionInnerContent > nav > ul > li"
    ); //selecting the last child from the outer list

    for (let j = 0; j < lastcheck.length; j++) {
      atagscroll = lastcheck[j].querySelectorAll("a"); // selecting all the a tags from that child
      for (let i = 0; i < atagscroll.length; i++) {
        atagscroll[i].addEventListener("click", (e) => {
          // here is the setTimeout function to wait till the inner ul list opened
          setTimeout(() => {
            // always make visible the list item which is clicked and aligned it to the center of the partition
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
    // For scrolling to the last list item from the left partition when click ---end---

    // For scrolling to the last list item from the right partition when click ---start---
    // same functionality as the left partition mentioned before
    const lastcheck1 = document.querySelectorAll(
      ".RightPartition > .RightPartitionInnerContent > nav > ul > li"
    );

    for (let j = 0; j < lastcheck1.length; j++) {
      const atagscroll1 = lastcheck1[j].querySelectorAll("a");
      for (let i = 0; i < atagscroll1.length; i++) {
        atagscroll1[i].addEventListener("click", (e) => {
          setTimeout(() => {
            // always make visible the list item which is clicked and aligned it to the center of the partition
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
    // For scrolling to the last list item from the left partition when click ---end---

    // left and right menu functionality ---start---
    const leftclick = document.querySelector(".lefthamburger");
    const rightclick = document.querySelector(".righthamburger");
    const leftmenu = document.querySelector(".LeftPartition");
    const rightmenu = document.querySelector(".RightPartition");

    // making event for opening up the first ul list after the nav ---start---
    leftclick.addEventListener("click", (e) => {
      leftmenu.classList.toggle("opensubmenu");
      rightmenu.classList.remove("opensubmenu");
    });

    rightclick.addEventListener("click", (e) => {
      rightmenu.classList.toggle("opensubmenu");
      leftmenu.classList.remove("opensubmenu");
    });
    // making event for opening up the first ul list after the nav ---end---

    // inserting arrows to the left Partition menu ---start---
    const leftPartition = document.querySelector(".LeftPartition"); // selection the left partition
    const leftList = leftPartition.querySelectorAll("li"); // selecting the li's from the left partition
    const leftul = leftPartition.querySelectorAll("ul"); //selecting the ul's from the left partition

    // here checking if a li has a ul inside him then add the arrow
    for (let i = 0; i < leftList.length; i++) {
      for (let j = 0; j < leftul.length; j++) {
        if (leftList[i].contains(leftul[j])) {
          leftList[i].classList.add("arrowLeft");
        }
      }
    }
    // inserting arrows to the left Partition menu ---end---

    // inserting arrows to the right Partition menu ---start---
    // same functionality as discussed before in the left partition
    const rightPartition = document.querySelector(".RightPartition");
    const rightList = rightPartition.querySelectorAll("li");
    const rightul = rightPartition.querySelectorAll("ul");

    for (let i = 0; i < rightList.length; i++) {
      for (let j = 0; j < rightul.length; j++) {
        if (rightList[i].contains(rightul[j])) {
          rightList[i].classList.add("arrowRight");
        }
      }
    }
    // inserting arrows to the right Partition menu ---end---

    // arrow rotating and opening the sub menus from the parent li  ---start---
    function resizing() {
      // Functionality for making the arrow rotate on hover in Desktop version and on click in tablet and mobile version ---start---
      const Lists = document.querySelectorAll("li");
      for (let i = 0; i < Lists.length; i++) {
        if (window.innerWidth > 1000) {
          //if the innerWidht of the window is less than 1000px then hover opening functionality
          Lists[i].addEventListener("mouseover", (e) => {
            e.target.classList.add("open");
          });
          Lists[i].addEventListener("mouseleave", (e) => {
            e.target.classList.remove("open");
          });
        } else {
          // otherwise opening on click functionality
          Lists[i].firstElementChild.addEventListener("click", (e) => {
            e.target.classList.toggle("open");
          });
        }
      }
      // Functionality for making the arrow rotate on hover in Desktop version and on click in tablet and mobile version ---end---

      if (window.innerWidth < 1000) {
        const allitem = document.querySelectorAll("li");
        const main = document.querySelector("main");
        const atags = main.querySelectorAll("a");

        // set the initial display to none for all the inner menu items ---start---
        for (let i = 0; i < allitem.length; i++) {
          check1 = allitem[i].getElementsByTagName("ul");
          for (let k = 0; k < check1.length; k++) {
            check1[k].style.display = "none";
          }
        }
        // set the initial display to none for all the inner menu items ---end---

        // Following is the functionality to open a sub menu if any 'a' tag has being click if it has a ul nextSibling
        for (let i = 0; i < atags.length; i++) {
          atags[i].addEventListener("click", (e) => {
            e.preventDefault();
            link = e.target.getAttribute("href");
            if (link === "#") {
              //if the 'a' tag only contains '#' in its href attribute than open a inner menu
              const nextlist = e.target.nextElementSibling; // selecting the 'ul' which is a next sibling of 'a' tag to open the menu
              e.target.parentNode.classList.toggle("open"); // rotating the arrow it 'li' has a arrow
              if (nextlist.style.display === "none") {
                //if list is not previously opened than open it otherwise close it
                nextlist.style.display = "block";
              } else {
                nextlist.style.display = "none";
              }
              e.stopPropagation();
            } else {
              //if 'a' tag points to some website than open that website
              window.location.href = link;
            }
          });
        }
      }
    }
    // arrow rotating and opening the sub menus from the parent li  ---end---

    //calling the resizing() function first time the page loads
    resizing();

    // again calling the resizing() function every time the resizing happens
    window.addEventListener("resize", (e) => {
      resizing();
    });
  }

  // calling the outer function
  func();
})();
