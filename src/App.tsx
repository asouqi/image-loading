import React, {useEffect, useRef, useState} from 'react';
import './App.css';

const IMAGE_LINK = 'https://www.w3schools.com/html/pic_trulli.jpg'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    const imageRef = useRef<HTMLImageElement>()

    /** This is to slow down showing the image for the sake of testing */
    const throttleLoading = (callback: () => void) => setTimeout(callback, 1000)

    const onLoadImage = () => throttleLoading(() => setIsLoading(false))

    useEffect(() => {
        if (imageRef.current?.complete) {
            throttleLoading(() => setIsLoading(false))
        }
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Example of detecting if image is loaded in React
                </p>

                {isLoading && <div className="image-placeholder skeleton"/>}

                <img className={`${isLoading ? 'hide' : 'show'}-image`}
                     src={IMAGE_LINK}
                     onLoad={onLoadImage}
                 alt=''/>
            </header>
        </div>
    );
}

export default App;
