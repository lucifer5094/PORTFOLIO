function zoomImage(imageUrl) {
  // Open the image in a new window
  var newWindow = window.open("", "_blank");
  newWindow.document.write(
    '<html><head><title>Lucifer</title></head><body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#000;"><img src="' +
      imageUrl +
      '" style="max-width:100%;max-height:100%;" alt="Zoomed Image"></body></html>'
  );
  newWindow.document.close();

  window.onload = function () {
    alert("If you get any error \nkindly view in desktop mode");
  };
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("commentForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const mailtoLink = `mailto:ankitraj85455@gmail.com?subject=Comment from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

      window.location.href = mailtoLink;

      alert("Your message has been sent!");
      document.getElementById("commentForm").reset();
    });
});

const toggleButton = document.getElementById("mode-toggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleButton.textContent =
    theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
}

// Check for saved user preference, if any, on load
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

// scroll

  document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('.scroll-animation');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
      element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });
  });

