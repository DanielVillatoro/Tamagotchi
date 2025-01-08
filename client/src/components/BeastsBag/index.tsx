import Header from "../Header/index.tsx";
import fight from '../../img/banner.jpeg';

function BeastsBag() {
  
  return (
    <>
       <Header />
        <div className="beasts-bag">
          <p className={'title text-center mb-3'}>
            You play, feed, sleep and more
            <span className='d-block'> Look at It, otherwise It'll die</span>
          </p>
          <div className="new yellow-border mb-3">
            <img src={fight} alt="" />
          </div>
        </div>
    </>
  )
}

export default BeastsBag;
