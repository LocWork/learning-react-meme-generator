import { React, useState } from 'react';
import './Meme.css';
import data from '../../memeData.js';
export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState(data.data);

  function getMeme() {
    setMeme((value) => {
      return {
        ...value,
        topText: '',
        bottomText: '',
        randomImage:
          allMemeImages.memes[
            Math.floor(Math.random() * allMemeImages.memes.length)
          ].url,
      };
    });
  }

  return (
    <div className='meme-container'>
      <div className='container'>
        <div className='input-text-container'>
          <input type='text' placeholder='TOP TEXT' />
          <input type='text' placeholder='BOTTOM TEXT' />
        </div>
        <button type='submit' className='send-button' onClick={getMeme}>
          Get a new meme image
        </button>

        <img src={meme.randomImage} alt='memeimage' />
      </div>
    </div>
  );
}

// {
//   /* <form>
//           <div className='input-text-container'>
//             <input type='text' placeholder='TOP TEXT' />
//             <input type='text' placeholder='BOTTOM TEXT' />
//           </div>
//           <input type='submit' value='Get a new meme image' />
//         </form> */
// }
