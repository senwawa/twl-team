// Your JSON dictionary
const imageDictionary = {
    "rex": {
        "image": "../gfx/pfps/rex.png", 
        "text": "Rex"
    },
    "sen": {
        "image": "../gfx/pfps/sen.png", 
        "text": "Sen"
    },
    "pook": {
        "image": "../gfx/pfps/pook.png", 
        "text": "love lights"
    },
    "miyu": {
        "image": "../gfx/pfps/miyu.png", 
        "text": "MiyuChan"
    },
    "square": {
        "image": "../gfx/pfps/square.png", 
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