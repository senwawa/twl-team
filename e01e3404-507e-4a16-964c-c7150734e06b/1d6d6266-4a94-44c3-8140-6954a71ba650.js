// Your JSON dictionary
const imageDictionary = {
    "rex": {
        "image": "../157d0249-8f57-45d5-bfb2-5d158f579912/a0addb7a-f950-43d9-8db6-6e9e00637400/5308e6bf-761c-4206-ae8e-bce4319ac327.png", 
        "text": "Rex"
    },
    "sen": {
        "image": "../157d0249-8f57-45d5-bfb2-5d158f579912/a0addb7a-f950-43d9-8db6-6e9e00637400/508e266b-3b92-460b-b182-9ef47cc52fa9.png", 
        "text": "Sen"
    },
    "pookiepatootie": {
        "image": "../157d0249-8f57-45d5-bfb2-5d158f579912/a0addb7a-f950-43d9-8db6-6e9e00637400/061643e3-625b-44a6-b9f9-c8a64c53434f.png", 
        "text": "love lights"
    },
    "miyu": {
        "image": "../157d0249-8f57-45d5-bfb2-5d158f579912/a0addb7a-f950-43d9-8db6-6e9e00637400/22203050-bf07-4fda-be85-cb75328a760a.png", 
        "text": "MiyuChan"
    },
    "square": {
        "image": "../157d0249-8f57-45d5-bfb2-5d158f579912/a0addb7a-f950-43d9-8db6-6e9e00637400/d69fff43-772e-40b8-90fd-bd91f520bbb2.png", 
        "text": "SquareJDBR"
    },
};

// Get the grid container
const gridContainer = document.getElementById('imageGrid');

// Populate the grid with images and text
Object.keys(imageDictionary).forEach(key => {
    const imageDetails = imageDictionary[key];

    // Create a grid item
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = imageDetails.image;
    imageElement.alt = key;

    // Create a text overlay element
    const textOverlay = document.createElement('div');
    textOverlay.classList.add('text-overlay');
    textOverlay.innerText = imageDetails.text;

    // Append image and text overlay to the grid item
    gridItem.appendChild(imageElement);
    gridItem.appendChild(textOverlay);

    // Append the grid item to the grid container
    gridContainer.appendChild(gridItem);
});