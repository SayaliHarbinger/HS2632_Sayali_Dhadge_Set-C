// Sample video data (replace it with your actual data)
const videos = [
    {
        id: 1,
        title: 'radha Krishna',
        thumbnail: './assets/images/radha.jfif',
        duration: '5:32',
        videoUrl: 'https://www.youtube.com/embed/Feoea8FQTI0',
        likes: 10,
        dislikes: 2,
        comments: [
          'An overwhelming song',
          'Pure music'
        ]
    },
    {
      id: 2,
      title: 'Ram Siya Ram',
      thumbnail: './assets/images/ram.jfif',
      duration: '3:45',
      videoUrl: 'https://www.youtube.com/embed/GXWfue9VhTY',
      likes: 8,
      dislikes: 1,
      comments: []
    },
    {
      id: 3,
      title: 'Hanuman Chalisa',
      thumbnail: './assets/images/hanuman.jfif',
      duration: '7:18',
      videoUrl: 'https://www.youtube.com/embed/ygUHSGFudW1hbg',
      likes: 5,
      dislikes: 3,
      comments: []
    }
  ];
  

function populateVideoList(videos) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = '';
  
    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className = 'col-md-4';
      videoCard.innerHTML = `
      <div class="card mb-4">
      <img src="${video.thumbnail}" class="card-img-top" alt="${video.title} Thumbnail">
      <div class="card-body">
        <h5 class="card-title">${video.title}</h5>
        <p class="card-text">Duration: ${video.duration}</p>
        <button class="btn btn-primary" onclick="window.location.href='video.html?id=${video.videoUrl}'">Watch Video</button>
      </div>
    </div>
      `;
      videoList.appendChild(videoCard);
    });
  }
  
  // Function to search videos based on keywords
  function searchVideos() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
    populateVideoList(filteredVideos);
  }
  populateVideoList(videos);


  