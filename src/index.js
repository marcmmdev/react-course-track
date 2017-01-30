import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';

const YT_API = "";


class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			videos: []
		};

		YTSearch({key: YT_API, term:'surf'},(videos) => {
			this.setState({videos});
			//this.setState({videos:videos})
		});

	}
	render(){
		return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos}/>
		</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));