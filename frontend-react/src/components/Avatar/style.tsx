import tw, { css } from "twin.macro";
import styled from "styled-components";

const Figure = styled.figure(() => [
	tw`
		flex flex-col min-h-full
		items-center justify-between
		// bg-red-800
	`,
	css`
		& img {
			${tw`
				mx-auto flex-1
				aspect-square rounded-full
				bg-white
			`}
		}
	`,
]);

export { Figure };
