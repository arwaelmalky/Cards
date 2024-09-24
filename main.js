let names = ['Arwa', 'Menna', 'Reem', 'Lia'];
let ages = ['21 Years Old', '20 Years Old', '21 Years Old', '15 Years Old'];
let images = ['https://img.freepik.com/premium-photo/beautiful-usa-girl-friendly-carefree-smile-looking-positive-relaxed-happy_564692-49374.jpg',
              'https://img.freepik.com/premium-photo/beautiful-usa-girl-friendly-carefree-smile-looking-positive-relaxed-happy_564692-49224.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1727136000&semt=ais_hybrid',
              'https://img.freepik.com/premium-photo/beautiful-usa-girl-friendly-carefree-smile-looking-positive-relaxed-happy_564692-49201.jpg',
              'https://img.freepik.com/premium-photo/beautiful-usa-girl-friendly-carefree-smile-looking-positive-relaxed-happy_564692-48706.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1727136000&semt=ais_hybrid'];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function getelement(name, age, imgSrc) {
    // Element creation
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let ageElement = document.createElement('p');  // Changed from 'age' to 'p'
    let img = document.createElement('img');

    // Content
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(age);
    
    // Set image source dynamically
    img.src = imgSrc;  // Use the passed imgSrc for the image
    
    title.appendChild(head);
    ageElement.appendChild(ageContent);

    // Style
    card.style.width = '200px';
    img.style.width = '100%';
    card.style.background = '#5f9ea0';
    card.style.color = '#a0615f';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';

    // Append elements to the card
    card.appendChild(title);
    card.appendChild(ageElement);
    card.appendChild(img);

    // Append the card to the container
    container.appendChild(card);  // This line ensures the cards appear in the container
}

// Loop to create cards
for (let i = 0; i < 4; i++) {
    getelement(names[i], ages[i], images[i]);  // Pass the corresponding image path for each card
}
