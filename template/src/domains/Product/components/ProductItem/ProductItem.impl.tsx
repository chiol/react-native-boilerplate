import React from "react";
import { View, Text } from "react-native";
import { IProductItem } from "./ProductItem.interface";

const ProductItem: React.FC<IProductItem.IProps> = ({ item, id }) => {
    return (
        <View>
            <Text>
                {id}: {item}
            </Text>
        </View>
    );
};

export default ProductItem;
