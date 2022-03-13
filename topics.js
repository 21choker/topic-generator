topics = [
    "Food",
    "Books",
    "fitness",
    "Brain gasm",
    "Music",
    "Instruments",
    "family",
    "Twister game",
    "movies",
    "life goals"
];

var index = 0;

const nxtBtns = document.getElementsByClassName("nxtBtn");
const loader = document.getElementById("circle");

const APIKEY = "NWGJCxv6UpFnYjxXtpsVxH6BG8fDKe1R";
const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;

function get_giphy(gif_url) {
    fetch(gif_url)
        .then(response => response.json())
        .then(content => {
            const fig = document.getElementById("gif-fig");
            const img = document.getElementById("gif-img");
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title;

            fig.appendChild(img);
            let out = document.querySelector(".out");
            out.appendChild(fig);
        })
        .catch(err => {
            console.error(err);
          });
}


function display_topic() {
    const topic_node = document.getElementById("topic");
    var topic = "No more topics for today";
    
    if (index < topics.length) 
        topic = topics[index++];

    let gif_url = url + topic;
    get_giphy(gif_url);
    topic_node.innerText = topic;
    loader.classList.toggle("hidden");
}

for (let i = 0; i < nxtBtns.length; i++)
    nxtBtns[i].addEventListener("click", () => {
            secs = Math.floor((Math.random() * 2000) + 1000);
            loader.classList.toggle("hidden");
            setTimeout(display_topic, secs);
        });