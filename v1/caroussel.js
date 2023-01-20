let slideIndex = 1;
        let slideIndex1 = 1;

        function showSlides(n, slide, dot) {
            let i;
            let slides = document.getElementsByClassName(slide);
            let dots = document.getElementsByClassName(dot);

            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[n - 1].style.display = "block";
            console.log(dots[n - 1]);
            dots[n - 1].className += " active";
        }

        showSlides(slideIndex, "mySlides", "dot");
        showSlides(slideIndex1, "mySlides2", "dot2");

        function plusSlides(n, slide, dot) {
            if (dot === 'dot') {
                showSlides(slideIndex += n, slide, dot);
            } else if (dot === 'dot2') {
                showSlides(slideIndex1 += n, slide, dot);
            }
        }

        function currentSlide(n, slide, dot) {
            showSlides(n, slide, dot);
        }