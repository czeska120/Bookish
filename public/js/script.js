window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    const allArticles = document.querySelectorAll("article");
	const allCategories = document.getElementsByClassName("category");
	
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
		document.getElementById("navbar").style.top = "0";
        for (let article of allArticles) {
            article.classList.add("visible");
        }

		for (let category of allCategories) {
			category.classList.add("visible");
		}
    } else {
        document.getElementById("navbar").style.top = "-150px";
        for (let article of allArticles) {
            article.classList.remove("visible");
        }

		for (let category of allCategories) {
			category.classList.remove("visible");
		}
    }
}

// CAROUSEL JS
const scrollContainers = document.querySelectorAll("#infiniteScroll--left");

scrollContainers.forEach((container) => {
	const scrollWidth = container.scrollWidth;
	let isScrollingPaused = false;

	window.addEventListener("load", () => {
		self.setInterval(() => {
			if (isScrollingPaused) {
				return;
			}
			const first = container.querySelector("article");

			if (!isElementInViewport(first)) {
				container.appendChild(first);
				container.scrollTo(container.scrollLeft - first.offsetWidth, 0);
			}
			if (container.scrollLeft !== scrollWidth) {
				container.scrollTo(container.scrollLeft + 1, 0);
			}
		}, 15);
	});

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return rect.right > 0;
	}

	function pauseScrolling() {
		isScrollingPaused = true;
	}

	function resumeScrolling() {
		isScrollingPaused = false;
	}
	const allArticles = container.querySelectorAll("article");
	for (let article of allArticles) {
		article.addEventListener("mouseenter", pauseScrolling);
		article.addEventListener("mouseleave", resumeScrolling);
	}
});