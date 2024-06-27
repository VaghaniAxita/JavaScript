import navbar from "../components/navbar.js";

let userdetails = JSON.parse(localStorage.getItem("user"));
let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/EXAM/test_7/pages/signup.html";
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username);
} else {
    document.getElementById("navbar").innerHTML = navbar()
}

let places = [
    {
        title: "Taj Mahal",
        cost: 500,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his wife."
    },
    {
        title: "Niagara Falls",
        cost: 400,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Famous waterfall on the border of Canada and the United States."
    },
    {
        title: "Great Wall of China",
        cost: 1200,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient wall in China, stretching over 13,000 miles and built to protect against invasions."
    },
    {
        title: "Eiffel Tower",
        cost: 200,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic iron lattice tower located on the Champ de Mars in Paris."
    },
    {
        title: "Machu Picchu",
        cost: 1000,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient Incan city in the Andes mountains of Peru."
    },
    {
        title: "Santorini",
        cost: 800,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Volcanic island in the Aegean Sea, known for its stunning sunsets and white-washed buildings."
    },
    {
        title: "Sydney Opera House",
        cost: 300,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic performing arts center in Sydney, Australia."
    },
    {
        title: "The Colosseum",
        cost: 400,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient Roman amphitheater in Rome, Italy, known for gladiatorial contests and public spectacles."
    },
    {
        title: "Petra",
        cost: 700,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient city carved into cliffs in Jordan, famous for its rock-cut architecture."
    },
    {
        title: "Mount Everest",
        cost: 5000,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "The highest peak in the world, located in the Himalayas."
    },
    {
        title: "Victoria Falls",
        cost: 600,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Waterfall on the Zambezi River in Africa, known for its width and volume."
    },
    {
        title: "Banff National Park",
        cost: 400,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Canadian national park located in the Rocky Mountains, known for its stunning landscapes and wildlife."
    },
    {
        title: "Tokyo Tower",
        cost: 250,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic communications and observation tower in Tokyo, Japan."
    },
    {
        title: "Pyramids of Giza",
        cost: 600,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient pyramid complex in Egypt, one of the Seven Wonders of the Ancient World."
    },
    {
        title: "Yellowstone National Park",
        cost: 300,
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "National park in the United States, known for its geothermal features and wildlife."
    }
];

const handlePlacesData = (data) => {
    let placeList = document.getElementById("placeList");
    placeList.innerHTML = "";

    data.map((place) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = place.img[0];
        img.alt = place.title;

        let title = document.createElement("h3");
        title.textContent = place.title;

        let cost = document.createElement("p");
        cost.textContent = `Cost: $${place.cost}`;

        let description = document.createElement("p");
        description.textContent = place.description;

        let likeBtn = document.createElement("button");
        likeBtn.textContent = `Like (${place.likes})`;
        likeBtn.addEventListener("click", () => handleLike(place));

        let shareBtn = document.createElement("button");
        shareBtn.textContent = `Share (${place.shares})`;
        shareBtn.addEventListener("click", () => handleShare(place));

        let commentBtn = document.createElement("button");
        commentBtn.textContent = `Comment (${place.comments})`;
        commentBtn.addEventListener("click", () => handleComment(place));

        div.append(img, title, cost, description, likeBtn, shareBtn, commentBtn);
        placeList.appendChild(div);
    });
};

const handleLike = (place) => {
    place.likes++;
    handlePlacesData(sortPlaces(places));
};

const handleShare = (place) => {
    place.shares++;
    handlePlacesData(sortPlaces(places));
};

const handleComment = (place) => {
    place.comments++;
    handlePlacesData(places);
};


handlePlacesData(places);

const handleSearch = (val) => {
    let temp = places.filter((place) => place.title.toLowerCase().includes(val.toLowerCase()));
    handlePlacesData(temp);
};

const handleSearchData = (e) => {
    e.preventDefault();
    let val = document.getElementById("searchValue").val.trim();
    handleSearch(val);
};

const handleInput = (e) => {
    let value = e.target.value.trim();
    if (value !== "") {
        handleSearch(value);
    } else {
        handlePlacesData(places);
    }
};

document.getElementById("searchValue").addEventListener("input", handleInput);
document.getElementById("searching").addEventListener("submit", handleSearchData);