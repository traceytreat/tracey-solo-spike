import { useState } from 'react';
import Tesseract from 'tesseract.js';

function TesseractDemo() {
    const [recognizedText, setRecognizedText] = useState('');


    //Change the urls below to change the test image
    // images are located in public/images

    //Check console log!

    Tesseract.recognize(
        './images/image6.jpg', //change this
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        setRecognizedText(text);
    });

    return (
        <div>
            <h2>Tesseract.js test</h2>
            {/* change the src */}
            <img width='300' alt='tesseract' src='./images/image6.jpg'/>
            <p>OUTPUT: {recognizedText}</p>
        </div>
    );
}

export default TesseractDemo;