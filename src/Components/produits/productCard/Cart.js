
import {useCart} from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCard
    } = useCart();

        if (isEmpty){
            return(
                <div className='container text-center'>
                <h2 className='text-center'>Votre panier est vide</h2>
                </div>
        )
    }

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Panier ({totalUniqueItems}) Nombre d'articles: ({totalItems})</h5>
                    <table className='table table-stiped table-hover m-0'>
                        <tbody>
                            {items.map ((item, index)=>{
                                return(
                                    <tr key={index} class="fond">
                                        <td>
                                            <img src={item.img} style= {{height: '6rem', width: '10rem'}}
                                            alt={item.title}/>
                                        </td>
                                        <td>
                                            <h5>{item.title}</h5>
                                        </td>
                                        <td>
                                            <h5>{item.price}</h5>
                                        </td>
                                        <td className='quan'>
                                            Quantité:({item.quantity})
                                        </td>
                                        <td>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                            <button className='btn btn-info ms-1' onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                            <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Retirer</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h5>Prix total : {cartTotal} €</h5>
                </div>
                <button className='btn btn-danger m-2' onClick={() => emptyCard()}>Vider le panier</button>
                <button className='btn btn-primary m-2'>Acheter maintenant</button>
            </div>
        </section>
    )
};

export default Cart;