const images = {};

// Import all images in ../assets/images/skills/*.png or svg
const imageContext = import.meta.globEager('../assets/images/skills/*.png');

// Add all images to images object
Object.keys(imageContext).forEach((image) => {
    const imageName = image.split('/').pop().split('.')[0];
    images[imageName] = imageContext[image].default;
});

export default images;
