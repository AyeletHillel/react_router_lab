import data from "../data";
import { Link } from "react-router-dom";

const Stocks = prompt => {
    return (
        <div>
             {data.map((stock) => {
                const { name, symbol } = stock;
                return (
                    <Link to={`/stock/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
        }

export default Stocks; 