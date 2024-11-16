import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

function ProductCard(props){
    return(
        <Card>
            <div className="h-80 bg-card rounded-lg p-4 relative">
                <img src="{/assets/products/airpods-max.png}" className = "block"/>
            </div>
            <div className="flex px-4 mt-4 items-center justify-between">
                <h2 className="text-2x1 font-semibold">Mobile</h2>
                <span className="block text-lg font-medium">$10000</span>
                <p>2</p>
            </div>
            <div className="px-4 mt-2">
                <p className="text-sm">Iphone X is a wonderful mobile</p>
            </div>
            <div className="mt-1 p-4">
                <Button className="mt-1 p-4">Buy now</Button>
            </div>
        </Card>
    );
}

export default ProductCard;