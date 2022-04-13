import dataProducts from '../data/dataProducts'
import Item from './Item'


const PopularItems = () => {
  return (
    <section className="popular__items">
      <h2 className="popular__title">Popular Items</h2>
      <p className="popular__desc">Most Ordered Items</p>
      <div className="popular__cards">
        {dataProducts.map(pro => {
          return (
            <Item key={pro.id} product={pro} />
          )
        })}
      </div>
    </section>
  ) 
}

export default PopularItems