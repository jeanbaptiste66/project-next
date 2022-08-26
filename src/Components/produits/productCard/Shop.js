
import ProductCard from './ProductCard';
import data from './CardData';







const Shop = () => {
    return (
        <div className='shop'>
            <h1 className='text-center mt-3 titleProduit'>Produits</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>{data.productData.map((item,index) =>{
                    return(
                        <ProductCard
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index}
                        />
                        )
                    }
                    )
                    }    
                </div>
            </section>
        </div>
    );
};


export default Shop;