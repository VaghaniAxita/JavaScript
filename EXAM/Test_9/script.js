document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio');
    const audioImg = document.getElementById('audioImg');
    const playlist = document.getElementById('playlist');
    const artistFilter = document.getElementById('artistFilter');
    const jumbotron = document.getElementById('bg');

    const AudioList = [
        { id: 1, name: 'Tu Jaane Na', artist: 'Atif Aslam', src: 'https://www.jiosaavn.com/lyrics/tu-jaane-na-from-ajab-prem-ki-ghazab-kahani-lyrics/JjgPXTgGVXA', img: 'https://example.com/Images/img11.jpg' },
        { id: 2, name: 'Ae Dil Hai Mushkil', artist: 'Arijit Singh', src: 'https://example.com/Audios/Ae_Dil_Hai_Mushkil.mp3', img: 'https://example.com/Images/img12.jpg' },
        { id: 3, name: 'Tum Mile', artist: 'Neeraj Shridhar', src: 'https://example.com/Audios/Tum_Mile.mp3', img: 'https://example.com/Images/img13.jpg' },
        { id: 4, name: 'Raabta', artist: 'Arijit Singh', src: 'https://example.com/Audios/Raabta.mp3', img: 'https://example.com/Images/img14.jpg' },
        { id: 5, name: 'Kabira', artist: 'Arijit Singh', src: 'https://example.com/Audios/Kabira.mp3', img: 'https://example.com/Images/img15.jpg' },
        { id: 6, name: 'Phir Le Aya Dil', artist: 'Arijit Singh', src: 'https://example.com/Audios/Phir_Le_Aya_Dil.mp3', img: 'https://example.com/Images/img16.jpg' },
        { id: 7, name: 'Sooraj Dooba Hain', artist: 'Arijit Singh', src: 'https://example.com/Audios/Sooraj_Dooba_Hain.mp3', img: 'https://example.com/Images/img17.jpg' },
        { id: 8, name: 'Sun Saathiya', artist: 'Priya Saraiya', src: 'https://example.com/Audios/Sun_Saathiya.mp3', img: 'https://example.com/Images/img18.jpg' },
        { id: 9, name: 'Galliyan', artist: 'Ankit Tiwari', src: 'https://example.com/Audios/Galliyan.mp3', img: 'https://example.com/Images/img19.jpg' },
        { id: 10, name: 'Tum Hi Ho', artist: 'Arijit Singh', src: 'https://example.com/Audios/Tum_Hi_Ho.mp3', img: 'https://example.com/Images/img20.jpg' },
    ];

    let currentTrackIndex = Math.floor(Math.random() * AudioList.length);

    const loadTrack = (index) => {
        const track = AudioList[index];
        audio.src = track.src;
        audioImg.src = track.img;
        audio.play();

        // Update background based on artist
        jumbotron.classList.remove('bg-ar-rahman', 'bg-kk', 'bg-arijit-singh');
        switch (track.artist) {
            case 'Atif Aslam':
                jumbotron.classList.add('bg-atif-aslam');
                break;
            case 'Arijit Singh':
                jumbotron.classList.add('bg-arijit-singh');
                break;
            case 'Neeraj Shridhar':
                jumbotron.classList.add('bg-neeraj-shridhar');
                break;
            case 'Priya Saraiya':
                jumbotron.classList.add('bg-priya-saraiya');
                break;
            case 'Ankit Tiwari':
                jumbotron.classList.add('bg-ankit-tiwari');
                break;
        }
    };

    const renderPlaylist = (searchQuery = '', artistQuery = '') => {
        playlist.innerHTML = '';
        AudioList.forEach((track, index) => {
            if (
                track.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (artistQuery === '' || track.artist === artistQuery)
            ) {
                const item = document.createElement('div');
                item.className = 'list-group-item list-group-item-action playlist-item';

                const img = document.createElement('img');
                img.src = track.img;
                img.alt = track.name;
                img.className = 'rounded float-left mr-3';
                item.appendChild(img);

                const nameSpan = document.createElement('span');
                nameSpan.textContent = `${track.name} - ${track.artist}`;
                item.appendChild(nameSpan);

                item.addEventListener('click', () => {
                    currentTrackIndex = index;
                    loadTrack(currentTrackIndex);
                });

                playlist.appendChild(item);
            }
        });
    };

    renderPlaylist();

    const handleSearchData = (e) => {
        e.preventDefault();
        let value = document.getElementById("searchValue").value;
        let artist = artistFilter.value;
        renderPlaylist(value, artist);
    };

    document.getElementById("search-form").addEventListener("submit", handleSearchData);
    document.getElementById("searchValue").addEventListener("input", handleSearchData);
    artistFilter.addEventListener("change", handleSearchData);

    loadTrack(currentTrackIndex);

    document.getElementById("play").addEventListener("click", () => {
        audio.play();
    });

    document.getElementById("pause").addEventListener("click", () => {
        audio.pause();
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + AudioList.length) % AudioList.length;
        loadTrack(currentTrackIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + 1) % AudioList.length;
        loadTrack(currentTrackIndex);
    });

    audio.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % AudioList.length;
        loadTrack(currentTrackIndex);
    });

    // Ensure audio auto-plays on page load
    loadTrack(currentTrackIndex);
});
