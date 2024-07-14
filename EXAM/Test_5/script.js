document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        document.getElementById("userimg").src = loggedInUser.imgUrl;
        document.getElementById("info").innerHTML = `
            <p>Name: ${loggedInUser.fullName}</p>
            <p>Email: ${loggedInUser.email}</p>
            <p>Country: ${loggedInUser.country}</p>
        `;
    }

    const News = JSON.parse(localStorage.getItem("News")) || [];
    const newsContainer = document.getElementById("News");

    News.forEach(news => {
        const newsCard = document.createElement("div");
        newsCard.className = "news-card";

        newsCard.innerHTML = `
            <img src="${news.img}" alt="${news.title}">
            <h3>${news.title}</h3>
            <p>${news.description}</p>
            <p>Country: ${news.country}</p>
            <div class="button-container">
                <button class="like">Like (${news.likes})</button>
                <button class="share">Share</button>
            </div>
        `;

        newsCard.querySelector(".like").addEventListener("click", () => {
            news.likes++;
            localStorage.setItem("News", JSON.stringify(News));
            newsCard.querySelector(".like").innerText = `Like (${news.likes})`;
        });

        newsCard.querySelector(".share").addEventListener("click", () => {
            alert(`News shared: ${news.title}`);
        });

        newsContainer.appendChild(newsCard);
    });
});