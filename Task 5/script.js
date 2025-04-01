// Fetch data from the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')

    .then(response => response.json()) // Convert the response to JSON

    .then(data => {
        const container = document.getElementById('data-container');
        // Loop through the data and create elements dynamically
        data.slice(0, 10).forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>`;
            container.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
