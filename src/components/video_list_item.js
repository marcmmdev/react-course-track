import React from 'react'; //import react and pullof component

const VideoListItem = ({video}) => {
	//const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div classname="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
			</div>

			<div className="media-body">
				<div className="media-heading">
					{video.snippet.title}
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;