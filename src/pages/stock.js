import data from "../data";
import { useParams } from "react-router-dom";

const Stock = props => {
    let { symbol } = useParams();


    return (
        <div>
            {data.filter(stock => stock.symbol === `${symbol}`).map(filteredStock => (
              <h1>
                Name: {filteredStock.name} <br/>
                Last Price: {filteredStock.lastPrice} <br/>
                High: {filteredStock.high} <br/>
                Low: {filteredStock.low} <br/>
                Open: {filteredStock.open}
              </h1>
            ))}
          </div>
      );
}

export default Stock; 




// people.filter(person => person.age < 60)