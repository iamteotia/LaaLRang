document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.background-images-container');
    const imageNames = [
        "8b88ddda75d24edfb78baccdd6435ec0 (1).jpg",
        "0ec903022dc81c65e7decb829eecf9fc5 (1).jpg",
        "fe9fa1273794d7e3238d5b2419dae845.jpg",
        "e85748a755a572023a1edb39d8b92007.jpg",
        "24b3a5871cdd975483ea8c96c88fe8d5.jpg",
        "84b8a69cdda640392d3a5f2cd5079f0.jpg",
        "dd5566d9c79f81a9e394610d697e8c12.jpg",
        "20e96b694615b89d1ce54d58a902e733.jpg",
        "86f237fb3ba6d7effd9d6475903b6e5a.jpg",
        "9807cf8bfd518ac7c1b8f5a2e29761e3.jpg",
        "8e3e20491ad219f0c691bb2fb198c5c3.jpg",
        "3119e584ab10338b5ac8034950604f71.jpg",
        "d2a1c0647eb3e62cd9e1799f96c40087.jpg",
        "6a60c77058430d741d1c11375694e621.jpg",
        "95b116411a8f2576a7f953abf61a8b79.jpg"
    ];

    function createCollage() {
        const collageDiv = document.createElement('div');
        collageDiv.classList.add('image-collage');
        
        // Add images and duplicates to create a seamless loop
        const allImages = [...imageNames, ...imageNames]; 
        
        allImages.forEach(imageName => {
            const img = document.createElement('img');
            img.src = imageName;
            img.alt = 'Background image';
            collageDiv.appendChild(img);
        });

        imagesContainer.appendChild(collageDiv);

        // Calculate height for seamless animation
        const totalHeight = collageDiv.scrollHeight;
        document.documentElement.style.setProperty('--collage-height', `${totalHeight / 2}px`);
    }

    createCollage();

    // Play music when the document is ready
    const music = document.getElementById('background-music');
    music.play().catch(error => {
        // Autoplay may be blocked by some browsers.
        console.log("Autoplay was prevented. User interaction might be needed to play music.");
    });
});
