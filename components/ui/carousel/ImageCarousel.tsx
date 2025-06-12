"use client"
import {Carousel} from "react-responsive-carousel";
import {imageData} from "@/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
    return (
        <div className="flex justify-center">
            <Carousel useKeyboardArrows={true} renderIndicator={() => (<></>)} className="max-h-[80vh] max-w-[60vw]">
                {imageData.map((image) => (
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