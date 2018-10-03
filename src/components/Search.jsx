import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';

// class Search extends React.component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       currentVideo: exampleVideoData[0],
//       video: exampleVideoData
//     } 
//   }
  
//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <input onChange = {props.inputValue} className="form-control" type="text" />
//         <button onClickCapture = {props.passClick} className="btn hidden-sm-down">
//           <span className="glyphicon glyphicon-search"></span>
//         </button>
//       </div> 
//     );
//   }
// }


var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange = {props.inputValue} className="form-control" type="text" />
    <button onClickCapture = {props.passClick} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
window.Search = Search;