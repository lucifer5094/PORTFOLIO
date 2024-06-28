document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const previewBtns = document.querySelectorAll('.preview-btn');
    const closeBtn = document.getElementsByClassName("close")[0];

    previewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute('data-full');
            captionText.innerHTML = this.previousElementSibling.innerHTML;
        });
    });

    closeBtn.onclick = function() { 
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

// image zoom
    function zoomImage(imageUrl) {
    // Open the image in a new window
    var newWindow = window.open("", "_blank");
    newWindow.document.write('<html><head><title>Lucifer</title></head><body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#000;"><img src="' + imageUrl + '" style="max-width:100%;max-height:100%;" alt="Zoomed Image"></body></html>');
    newWindow.document.close();
  }
});
