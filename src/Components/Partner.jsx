import PartnerCard from '../ui/PartnerCard';
import Vector1 from './img/Vector1.svg';
import Vector2 from './img/Vector2.svg';
import Vector3 from './img/Vector3.svg';
import Vector4 from './img/Vector4.svg';

const Partner = () => {
    return (
        <div className="container partner_cont">
            <PartnerCard img={Vector1}/>
            <PartnerCard img={Vector2}/>
            <PartnerCard img={Vector3}/>
            <PartnerCard img={Vector4}/>
        </div>
    );
}

export default Partner;
