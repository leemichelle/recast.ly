var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet', 
      type: 'video', 
      videoEmbeddable: 'true',
      q: options.query || 'marmoset',
      key: options.key || YOUTUBE_API_KEY,
      maxResults: options.max || 5
    },
    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('error');
    }
  });
};

export default searchYouTube;
window.searchYouTube = searchYouTube;
