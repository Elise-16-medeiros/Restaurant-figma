import Image from "next/image";
import img from '@/public/IMAGE.png'


function ContainerImg() {
    return (
        <div>
             <Image src={img} alt="image" />
        </div>
    );
}

export default ContainerImg;