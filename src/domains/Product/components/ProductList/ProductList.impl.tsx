import React from "react";
import { FlatList } from "react-native";
import { useGetProduct } from "domains/Product/hooks";
import ProductItem from "../ProductItem";
import styled from "@emotion/native";
import TitleText from "common/components/TitleText";

const ProductList: React.FC = () => {
    const { data } = useGetProduct();
    return (
        <Container>
            <TitleText title="data fetching" />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ProductItem id={item.id} item={item.title} />
                )}
            />
        </Container>
    );
};
const Container = styled.View`
    flex: 1;
`;
export default ProductList;
