"use client"
import {imageData} from "@/data";
import ImageCard from "@/components/ui/ImageCard";
import {VirtuosoGrid} from 'react-virtuoso'
import {forwardRef} from 'react'

const gridComponents = {
    List: forwardRef(({style, children, ...props}, ref) => (
        <div
            ref={ref}
            {...props}
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                ...style,
            }}
        >
            {children}
        </div>
    )),
    Item: ({children, ...props}) => (
        <div
            {...props}
            style={{
                padding: "0.5rem",
                display: "flex",
                flex: "none",
                alignContent: "stretch",
                boxSizing: "border-box",
            }}
        >
            {children}
        </div>
    )
}

gridComponents.List.displayName = "List";

const ItemWrapper = ({children, ...props}) => (
    <div
        {...props}
        style={{
            display: "flex",
            flex: 1,
            textAlign: "center",
            padding: "0",
            border: "none",
            whiteSpace: "nowrap"
        }}
    >
        {children}
    </div>
);

const ImageGrid = () => {

    return (

        <VirtuosoGrid
            style={{height: 500}}
            totalCount={imageData.length}
            components={gridComponents}
            itemContent={(index) => <ItemWrapper><ImageCard key={imageData[index].desc} imgSrc={imageData[index].url}
                                                            imgDesc={imageData[index].desc}/></ItemWrapper>}
        />
    )
}

export default ImageGrid;