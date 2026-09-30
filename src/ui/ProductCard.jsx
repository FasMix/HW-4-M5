import Arrow from '../Components/img/Arrow.svg';
const ProductCard = ({ image, title, description, count }) => {
    return (
        <div>
            <div>
                <img src={image} alt="Product" />
            </div>
            <h3>{title}</h3>
            <p className='count'>Тираж: от {count} штук</p>
            <p className='des'>{description}</p>
            <a href="#">Подробнее</a>
            <img className='arrow' src={Arrow} alt="Arrow" />
        </div>
    );
}

export default ProductCard;
