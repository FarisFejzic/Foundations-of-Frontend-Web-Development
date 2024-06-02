(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
//My scripts

//Interactive gallery

const imageLinks = document.querySelectorAll('.image-link');
        const modalImage = document.getElementById('modal-image');
        
        imageLinks.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
        
            const imageUrl = link.querySelector('img').src;
            modalImage.src = imageUrl;
        
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
        
            // Set image to full size after modal shows (ensures image is loaded)
            modalImage.onload = () => {
              modalImage.style.width = '100%';
              modalImage.style.height = 'auto';
            };
          });
        });
        
        // Close modal when clicking the close button (optional)
        const closeButton = document.querySelector('.btn-close');
        
        closeButton.addEventListener('click', () => {
          modalImage.src = "";
});

        //Notification for 404 error page

function showErrorNotification() {
     alert("This page is not found! (Error 404)"); // Simulate Toastr notification (limited functionality)
}

//Theme switcher

document.getElementById('themeToggleBtn').addEventListener('click', function() {
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue('--bs-primary').trim();
    const secondaryColor = getComputedStyle(root).getPropertyValue('--bs-secondary').trim();

    root.style.setProperty('--bs-primary', secondaryColor);
    root.style.setProperty('--bs-secondary', primaryColor);

    // Toggle the button class to reflect the new theme
    this.classList.toggle('btn-primary');
    this.classList.toggle('btn-secondary');
  });

//Content Toggle

  document.getElementById('readMoreBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const toggleText = document.getElementById('toggleText');
    if (toggleText.style.display === 'none' || toggleText.style.display === '') {
      toggleText.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      toggleText.style.display = 'none';
      this.textContent = 'Read More';
    }
  });

  document.getElementById('readMoreBtn2').addEventListener('click', function(event) {
    event.preventDefault();
    const toggleText = document.getElementById('toggleText2');
    if (toggleText.style.display === 'none' || toggleText.style.display === '') {
      toggleText.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      toggleText.style.display = 'none';
      this.textContent = 'Read More';
    }
  });

  document.getElementById('readMoreBtn3').addEventListener('click', function(event) {
    event.preventDefault();
    const toggleText = document.getElementById('toggleText3');
    if (toggleText.style.display === 'none' || toggleText.style.display === '') {
      toggleText.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      toggleText.style.display = 'none';
      this.textContent = 'Read More';
    }
  });

  //Form reservation
