// const getVideo =async(search)=>{
//     let req= await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=cartoon&type=video&key=AIzaSyBxJ2vhC9LQBmwJwLZ00OTac9g8HjlYEoQ")
//     let res=await req.json()
//     console.log(res);
//     getVideo()
// }
// getVideo("js")

// let videos=localStorage.getItem("videoId")

const apiKey = 'AIzaSyBxJ2vhC9LQBmwJwLZ00OTac9g8HjlYEoQ'; // Replace with your own API key

const getVideo = async (search) => {
    try {
        let req = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=${apiKey}`);
        let res = await req.json();
        displayVideos(res.items);
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
};

const displayVideos = (videos) => {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = ''; // Clear previous results

    videos.forEach(video => {
        const videoId = video.id.videoId;
        const thumbnailUrl = video.snippet.thumbnails.medium.url;
        const title = video.snippet.title;
        const channelTitle = video.snippet.channelTitle;

        const videoThumbnail = document.createElement('div');
        videoThumbnail.className = 'video-thumbnail';
        videoThumbnail.innerHTML = `
            <img src="${thumbnailUrl}" alt="${title}">
            <h3>${title}</h3>
            <p>${channelTitle}</p>
        `;
        videoThumbnail.addEventListener('click', () => {
            loadVideo(videoId);
            saveVideoId(videoId);
        });

        videoGrid.appendChild(videoThumbnail);
    });
};

const loadVideo = (videoId) => {
    document.getElementById('video').src = `https://www.youtube.com/embed/${videoId}`;
};

const saveVideoId = (videoId) => {
    let savedVideos = JSON.parse(localStorage.getItem('videoIds')) || [];
    if (!savedVideos.includes(videoId)) {
        savedVideos.push(videoId);
        localStorage.setItem('videoIds', JSON.stringify(savedVideos));
    }
};

document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        getVideo(searchTerm);
    }
});

// Initial call to display videos
getVideo('cartoon');


