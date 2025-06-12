

interface ImageCardProps {
    imgSrc: string;
    imgDesc: string;
}

const ImageCard = (props: ImageCardProps) => {
    const {imgSrc, imgDesc} = props;

    return (
        <div
            className={`relative max-w-xs overflow-hidden shadow-lg rounded-2xl group flex items-center`}>
            <img src={imgSrc} alt={imgDesc} className="trasition-transform group-hover:scale-110 duration-200"/>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                <div className="p-4 text-white">
                    <p className="text-wrap">{imgDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;