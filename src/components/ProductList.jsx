import './ProductList.css';

function ProductList() {
  const products = [
    {id: 0, title: '츄르', info: '닭고기맛', price: 13900, img: 'https://www.costco.co.kr/medias/sys_master/images/ha6/hd1/101821935026206.jpg'},
    {id: 1, title: '스낵', info: '연어맛', price: 8900, img: 'https://sitem.ssgcdn.com/17/48/69/item/2097001694817_i1_332.jpg'},
    {id: 2, title: '저키', info: '소고기맛', price: 11500, img: 'https://cdn.catpang.com/catpang/data/goods/1/774_web_detail_1557988164418247.jpg'},
  ];

  return (
    <div className="card-container">
      {
        products.map (item => {
          return (
            <div className="card" key={item.id}>
              <div className="card-img" style={{backgroundImage: `url('${item.img}')`}}></div>
              <br />
              <p className="card-title">{item.title}</p>
              <p className="card-price">{item.price}원</p>
            </div>
          );
        })
      }
      
      {/* {
        products.map((product, idx) => {
          return (
            <div className="card" key={idx}>
              <div className="card-img" style={{backgroundImage: `url('${product.img}')`}}></div>
              <p className="card-title">{product.title}</p>
              <p className="card-price">{product.price}</p>
            </div>
          );
        })
      } */}
    </div>
  );

}

export default ProductList;