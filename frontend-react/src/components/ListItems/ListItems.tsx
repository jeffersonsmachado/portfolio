import React from "react";
import { Container } from "./style";

interface Props {
	children?: React.ReactNode;
}

function ListItems({ children }: Props) {
	return <Container>{children}</Container>;
}

export default ListItems;
