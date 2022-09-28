
import { useState, useEffect } from 'react';
import './Home.css'


const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
 
  const [videoUrl, setVideoUrl] = useState(null);


  useEffect(() => {
    if (selectedVideo) {
      setVideoUrl(URL.createObjectURL(selectedVideo));
    }
    
    
  },[selectedVideo]);

  return (
    <>  
        <div className='container'>
            <div className='container input__container'>
                <form>
                <h1>Upload Video</h1>  
                <input
                    className='upload-video'
                    type="file"
                    id="select-video"     
                    onChange={e => setSelectedVideo(e.target.files[0])}
                />
               
                </form>
            </div>
        </div>
       
      
      {videoUrl && selectedVideo &&  (
        <div className='container videoplayer__container'>
            <article className='videoplayer__items'>
            <div className='videoplayer__item-video'>
                <video
                    className="video-js"
                    controls
                    preload="auto"
                    width="720"
                    height="360"
                    data-setup='{}'>
                    <source src={videoUrl} type="video/mp4"/>
                    
                    </video>

                </div>
            </article>
            
      </div>
      )}
    </>
    
  );
};

export default Home;
