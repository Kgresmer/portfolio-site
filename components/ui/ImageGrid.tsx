"use client"
import {imageData} from "@/data";
import ImageCard from "@/components/ui/ImageCard";
import {VirtuosoGrid} from 'react-virtuoso'
import {forwardRef} from 'react'



const gridComponents = {
    // @ts-expect-error exterior component
    List: forwardRef(({style, children, ...props}: never, ref) => (
        <div
            ref={ref}
            {...props}
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                ...style as object,
            }}
        >
            {children}
        </div>
    )),
    // @ts-expect-error exterior component
    Item: ({children, ...props}: never) => (
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
// @ts-expect-error exterior component
const ItemWrapper = ({children, ...props}: never) => (
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
            // @ts-expect-error exterior component
            components={gridComponents}
            // @ts-expect-error exterior component
            itemContent={(index) => <ItemWrapper><ImageCard key={imageData[index].desc} imgSrc={imageData[index].url}
                                                            imgDesc={imageData[index].desc}/></ItemWrapper>}
        />
    )
}

export default ImageGrid;