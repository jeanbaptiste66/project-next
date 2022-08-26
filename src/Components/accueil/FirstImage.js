
import { Parallax } from 'react-parallax';
import surf from './imgs/surf10.jpg';

const FirstImage = () => (
     <Parallax className='image' bgImage={surf} strength={400}>
          <div className='content'>
               <span className='img-text'>Dans la vague</span>
          </div>
     </Parallax>
);

export default FirstImage;
