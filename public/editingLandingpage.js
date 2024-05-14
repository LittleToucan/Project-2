function redirectToPage() {
    window.location.href = 'signupPage.html';
}

function sleep(ms) { //create a promise that resolves after ms time
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function toggleGreyscale() {
    /*
        Handles greyscaling toggling effect.
        The while loop continuously loops ad infinitum and constantly 
        toggles the addition and removal of the greyscale effect
    */
    const topImages = document.querySelectorAll(".welcomeright .top-row .square");
    const bottomImages = document.querySelectorAll(".welcomeright .bottom-row .square");

    while (true) {
        for (let image of topImages) {
            image.classList.add("grey");
        }
        for (let image of bottomImages) {
            image.classList.remove("grey")
        }
        await sleep(5000);
        for (let image of topImages) {
            image.classList.remove("grey");
        }
        for (let image of bottomImages) {
            image.classList.add("grey")
        }
        await sleep(5000);
    }
}

toggleGreyscale();

async function imageCarousel() {
    const images = [
        "chatthreads.png",
        "chatthreads.png",
        "chatthreads.png"
    ];

    const communityRight = document.querySelector('.communityright img');

    let currentIndex = 0;

    while (true) {
        communityRight.style.opacity = '0';
        await new Promise(resolve => setTimeout(resolve, 2000)); //wait for fade out

        communityIndex = (currentIndex + 1) % images.length; //circular array effect so it can loop back to another image
        communityRight.src = images[currentIndex];

        communityRight.style.opacity = '1';
        await new Promise(resolve => setTimeout(resolve, 5000)); //wait for 5 seconds before next image
    }
}

imageCarousel();