import Image from "next/image";
import img from '@/public/IMAGE.png'


function ContainerImg() {
    return (
        <div className="container">
             <Image src={img} alt="image" />
        </div>
    );
}

export default ContainerImg;