import Card from './card'
import Data from '../../Data/data.json'
function Main(){
return (
    <div className='main'>
      {Data.map((item,i)=>{
          return (
          <Card key={i}image={item.image} name={item.name} detail={item.detail} price={item.price}/>
          );
      })}
    </div>
);
}

export default Main