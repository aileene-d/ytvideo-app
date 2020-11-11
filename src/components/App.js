import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/userVideos';

const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('kitty');

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos]);
    // useEffect(() => {
    //     onTermSubmit('kitty')
    // }, []);

    // setSelectedVideo(response.data.items[0]);

    // const onTermSubmit = async term => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     });

    //     setVideos(response.data.items);

    // };



    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid" >
                <div className="ui row" >
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            // onVideoSelect={(video) => {setSelectedVideo(video)}} kod nizhe analogichen kodu v etoi stroke 
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

};


export default App;