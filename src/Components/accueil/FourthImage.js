
import { Parallax } from 'react-parallax';
import surf from './imgs/surf06.jpg';

const FourthImage = () => (
     <Parallax className='image' bgImage={surf} strength={400}>
          <div className='content'>
               <span className='img-text'>L'attente</span>
          </div>
     </Parallax>
);

export default FourthImage;