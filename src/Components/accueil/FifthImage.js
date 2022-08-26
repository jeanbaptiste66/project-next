
import { Parallax } from 'react-parallax';
import surf from './imgs/surf04.jpg';

const FifthImage = () => (
     <Parallax className='image' bgImage={surf} strength={400}>
          <div className='content'>
               <span className='img-text'>Before midnight</span>
          </div>
     </Parallax>
);

export default FifthImage;