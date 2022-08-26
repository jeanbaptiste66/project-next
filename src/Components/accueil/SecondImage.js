
import { Parallax } from 'react-parallax';
import surf from './imgs/surf07.jpg';

const SecondImage = () => (
     <Parallax className='image' bgImage={surf} strength={400}>
          <div className='content'>
               <span className='img-text'>C'est parti !</span>
          </div>
     </Parallax>
);

export default SecondImage;
