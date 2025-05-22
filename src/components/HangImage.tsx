import Image0 from '../assets/0.png';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Image5 from '../assets/5.png';
import Image6 from '../assets/6.png';
import Image7 from '../assets/7.png';
import Image8 from '../assets/8.png';
import Image9 from '../assets/9.png';

const gameImages:string[] = [
    Image0,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
]

interface Props{
    imageNumber:number;
}


export function HangImage({imageNumber}:Props){

    if(imageNumber>=9){
        imageNumber=9;
    }


    return (
       <img 
            src={gameImages[imageNumber]}
            alt='Hang image'
            style={{ width:250 }}
        ></img>
    )
}