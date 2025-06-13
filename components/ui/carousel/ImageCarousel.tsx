"use client"
import {Carousel} from "react-responsive-carousel";
import {imageData} from "@/data";
import styles from './ImageCarousel.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ImageData {
    url: string;
    desc: string;
}

const shuffleArray = (array: ImageData[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const ImageCarousel = () => {
    return (
        <div className="flex justify-center">
            <Carousel useKeyboardArrows={true}
                      renderIndicator={() => (<></>)}
                      className={`max-h-[80vh] lg:max-w-[38vw] md:max-w-[50vw] sm:max-w-[60vw] ${styles.carouselOverride}`}
            >
                {shuffleArray(imageData).map((image) => (
                    <div className="slide align-center" key={image.desc}>
                        <img alt={image.desc} src={image.url}/>
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                            <div className="p-4 text-white">
                                <p className="text-wrap">{image.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageCarousel;