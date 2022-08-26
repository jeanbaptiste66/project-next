import Component from 'react'
import FirstImage from '../Components/accueil/FirstImage';
import TextBox from '../Components/accueil/TextBox';
import SecondImage from '../Components/accueil/SecondImage';
import ThirdImage from '../Components/accueil/ThirdImage';
import FourthImage from '../Components/accueil/FourthImage';
import FifthImage from '../Components/accueil/FifthImage';
import Footer from '../Components/accueil/Footer';

class Accueil extends Component {
  render() {
    return (
      <div>
        <FirstImage/>
        <TextBox/>
        <SecondImage/>
        <TextBox/>
        <ThirdImage/>
        <TextBox/>
        <FourthImage/>
        <TextBox/>
        <FifthImage/>
        <Footer/>
        </div>
    )
  }
}

export default Accueil;