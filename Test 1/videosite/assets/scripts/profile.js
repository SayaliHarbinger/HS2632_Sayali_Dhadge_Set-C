// Sample user data with uploaded videos
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'New York',
    uploadedVideos: [
      {
        id: 1,
        title: 'radha Krishna',
        thumbnail: './assets/images/radha.jfif',
        duration: '5:32'
      },
      {
        id: 2,
        title: 'Ram Siya Ram',
        thumbnail: './assets/images/ram.jfif',
        duration: '3:45'
      }
    ]
  };
  
  // Function to populate the uploaded videos section on the user profile page
  function populateUploadedVideos() {
    const uploadedVideosList = document.getElementById('uploaded-videos');
  
    uploadedVideosList.innerHTML = '';
  
    user.uploadedVideos.forEach(video => {
      const videoItem = document.createElement('li');
      videoItem.className = 'list-group-item';
      videoItem.innerHTML = `
        <div class="media">
          <img src="${video.thumbnail}" class="mr-3" alt="${video.title} Thumbnail" width="100">
          <div class="media-body">
            <h5 class="mt-0">${video.title}</h5>
            <p>Duration: ${video.duration}</p>
          </div>
        </div>
      `;
      uploadedVideosList.appendChild(videoItem);
    });
  }
  
  // Call the function to populate the user profile page with the uploaded videos and information
  populateUploadedVideos();
  