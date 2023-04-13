import tw, { css } from "twin.macro";
import styled from "styled-components";

const Container = styled.div(({}) => [
	tw`
		flex flex-row justify-center
		p-10 items-center border-[1rem]
		border-sky-200`,
	css`
		> .avatar {
			${tw`
					basis-1/6 aspect-square
					// bg-yellow-400
				`}
		}
		> .links {
			${tw`
					basis-5/6
					flex flex-row
					justify-end
				`}
		}
	`,
]);

const Navlink = styled.a(({}) => [tw`p-2 md:p-1`]);

export { Container, Navlink };
