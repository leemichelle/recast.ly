import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
//import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';


class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      input: ''
    };
  }

  componentDidMount() {
    //console.log(searchYouTube)
    this.props.searchYouTube({}, function (result) {
      this.setState({ 
        currentVideo: result[0],
        videos: result
      });
    }.bind(this));
  }

  
  handleSearchInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSearchClick() {
    let searchData = {
      query: this.state.input 
    };
    this.props.searchYouTube(searchData, function (data) {
      this.setState({ 
        currentVideo: data[0],
        videos: data
      });
    }.bind(this));
  }

  handleClick(event) {  
    this.setState({
      currentVideo: event
    });
  }
  
  render() {
    return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search inputValue = {this.handleSearchInput.bind(this)} passClick = {this.handleSearchClick.bind(this)} />
        </div>
      </nav>
      <div className="col-md-7">
        <VideoPlayer video = {this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList passClick = {this.handleClick.bind(this)} videos = {this.state.videos}/>
      </div>
    </div>;
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
