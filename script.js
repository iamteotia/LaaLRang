document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.background-images-container');
    const backgroundMusic = document.getElementById('background-music');

    // List of your image files
    const imageNames = [
        "8b88ddda75d24edfb78baccdd6435ec0 (1).jpg",
        "0ec903022dc81c65e7decb829eecf9fc5 (1).jpg",
        "fe9fa1273794d7e3238d5b2419dae845.jpg",
        "e85748a755a572023a1edb39d8b92007.jpg",
        "24b3a5871cdd975483ea8c96c88fe8d5.jpg",
        "84b8a69cdda640392d3a5f2cd5079f0.jpg",
        "dd5566d9c79f81a9e34610d697e8c12.jpg",
        "20e96b694615b89d1ce54d58a902e733.jpg",
        "86f237fb3ba6d7effd9d645903b6e5a.jpg",
        "9807cf8bfd518ac7c1b8f5a2e29761e3.jpg",
        "8e3e20491ad219f0c691bb2fb198c5c3.jpg",
        "3119e584ab10338b5ac8034950604f71.jpg",
        "d2a1c0647eb3e62cd9e1799f96c40087.jpg",
        "6a60c77058430d741d1c11375694e621.jpg",
        "95b116411a8f2576a7f953abf61a8b79.jpg"
    ];

    function createCollageContent() {
        const collageDiv = document.createElement('div');
        collageDiv.classList.add('image-collage');

        // Duplicate images multiple times to ensure enough content for seamless scrolling
        // This makes sure the animation doesn't show blank space
        const numberOfDuplicates = 5; // Adjust as needed to ensure enough content
        let allImages = [];
        for (let i = 0; i < numberOfDuplicates; i++) {
            allImages = allImages.concat(imageNames);
        }
        
        allImages.forEach(imageName => {
            const img = document.createElement('img');
            img.src = imageName;
            img.alt = 'Background image';
            img.onerror = () => {
                console.error(`Failed to load image: ${imageName}. Please check the file name and path.`);
                img.style.display = 'none'; // Hide broken image icon
            };
            collageDiv.appendChild(img);
        });

        imagesContainer.appendChild(collageDiv);

        // Adjust animation for seamless loop based on content height
        // This will be handled by CSS animation-fill-mode and proper content duplication
    }

    createCollageContent();

    // Function to attempt playing music
    function tryPlayMusic() {
        backgroundMusic.play().then(() => {
            console.log("Music started playing.");
        }).catch(error => {
            console.warn("Autoplay was prevented:", error.message);
            console.log("Waiting for user interaction to play music...");
            // Add a class or show a button if you want to notify the user to click
            // For now, we'll try on any click.
        });
    }

    // Attempt to play music immediately
    tryPlayMusic();

    // Add a global click listener as a fallback for autoplay policies
    // This will try to play music if any click occurs on the page
    document.body.addEventListener('click', tryPlayMusic, { once: true });
    // Using { once: true } ensures it only tries once after a click to avoid spamming console
});
