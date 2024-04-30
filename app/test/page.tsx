// pages/index.js or any other page
import AudioPlayer from '@/components/AudioPlayer';  // If you renamed the file

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <AudioPlayer src="http://localhost/api/products/images/product_7_audio.wav" />
        </div>
    );
};

export default HomePage;
