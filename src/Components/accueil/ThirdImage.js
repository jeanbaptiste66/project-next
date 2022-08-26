
import { Parallax } from 'react-parallax';
import surf from './imgs/surf05.jpg';

const ThirdImage = () => (
     <Parallax className='image' bgImage={surf} strength={400}>
          <div className='content'>
               <span className='img-text'>Les rouleaux</span>
          </div>
     </Parallax>
);

export default ThirdImage;