import { About } from './Components/About';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Page1 } from './Components/Page1';
import { Page2 } from './Components/Page2';
import { Page3 } from './Components/Page3';
import  { Page4 } from './Components/Page4';
import { Page5 } from './Components/Page5';
import { Rectangle } from './Components/Rectangle';

function App() {
  return (
    <>
      <div className="App font-display ">
        <div className='p-5 lg:py-10  lg:px-20'>
          <Header />
          <About />
          <Rectangle />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />


        </div>
        <Page5 />
        <Footer />
      </div>

    </>

  );
}

export default App;
