document.addEventListener('click', () => {
    let likeCount = localStorage.getItem("likeCount") || 0;
    let commentCount = localStorage.getItem("commentCount") || 0;
    let shareCount = localStorage.getItem("shareCount") || 0;
    let subscribeCount = localStorage.getItem("subscribeCount") || 0;

    const likeIcon = document.getElementById('like-count');
    const commentIcon = document.getElementById('comment-count');
    const shareIcon = document.getElementById('share-count');
    const subscribeIcon = document.getElementById('subscribe-count');

    likeIcon.innerHTML = likeCount;
    commentIcon.innerHTML = commentCount;
    shareIcon.innerHTML = shareCount;
    subscribeIcon.innerHTML = subscribeCount;

    const updateCounts = (type) => {
        if (type === 'like') {
            likeCount++;
            likeIcon.innerHTML = likeCount;
            localStorage.setItem("likeCount", likeCount);
            alert("You liked this post.");
        } else if (type === 'comment') {
            commentCount++;
            commentIcon.innerHTML = commentCount;
            localStorage.setItem("commentCount", commentCount);
            alert("You commented on this post.");
        } else if (type === 'share') {
            shareCount++;
            shareIcon.innerHTML = shareCount;
            localStorage.setItem("shareCount", shareCount);
            alert("You shared this post.");
        } else if (type === 'subscribe') {
            subscribeCount++;
            subscribeIcon.innerHTML = subscribeCount;
            localStorage.setItem("subscribeCount", subscribeCount);
            alert("You subscribed this post.");
        }
    };

    document.getElementById('like-button').addEventListener('click', () => updateCounts('like'));
    document.getElementById('comment-button').addEventListener('click', () => updateCounts('comment'));
    document.getElementById('share-button').addEventListener('click', () => updateCounts('share'));
    document.getElementById('subscribe-button').addEventListener('click', () => updateCounts('subscribe'));
}, { once: true }); 
