import ProductCard from '../ui/ProductCard';
import product1 from './img/Product1.jpg';
import product2 from './img/Product2.jpg';
import product3 from './img/Product3.jpg';
import product4 from './img/Product4.jpg';

const Product = () => {
    return (
        <div className="container product_cont">
            <ProductCard image={product1} title="Упаковка" description="Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ." count={50} />
            <ProductCard image={product2} title="Пакеты" description="С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн." count={200} />
            <ProductCard image={product3} title="Кейсы" description="Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага." count={30} />
            <ProductCard image={product4} title="Другие изделия " description="Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки." count={100} />
        </div>
    );
}

export default Product;
