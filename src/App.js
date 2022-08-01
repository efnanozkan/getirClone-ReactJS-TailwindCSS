import Header from './components/Header'
import Slide from './components/Slide'
import Categories from './components/Categories'
import Offers from './components/Offers'
import Mobile from './components/Mobile'
import Cards from 'components/Cards'
import Footer from './components/Footer'

import { useWindowWidth, } from '@react-hook/window-size'


function App() {
  
 
  const windowW = useWindowWidth()

  return (
    <>
    <Header />
    {windowW <= 768 && <Offers />}
    <Slide />
    <Categories />
    {windowW > 768 && <Offers /> }
    <Mobile />
    <Cards />
    <Footer />
    </>
     
    
  );
}

export default App;
