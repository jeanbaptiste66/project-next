
import { useCart} from 'react-use-cart';

const ProductCard = (props) => {
    const {addItem} = useCart();
    return (
        <div className='col-1 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 bg-white'>
                <img src= {props.img} class="card-img-top" style={{height: '12rem'}} />
                <div className='card-body text-center'>
                    <h5 class='card-title'>{props.title}</h5>
                    <h5 className='card-title'>{props.price}</h5>
                    <p className='card-text mb-4' style= {{height: '2rem'}}> {props.desc}</p>
                    <button class='btn btn-success' onClick={() =>addItem (props.item)}>Ajouter au panier</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;