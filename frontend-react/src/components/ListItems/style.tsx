import styled from "styled-components";
import tw, { css } from "twin.macro";

const Container = styled.div(() => [
	tw`flex flex-col items-center justify-around
    min-h-full h-80
    bg-sky-600 border-2
  `,
	css``,
]);

export { Container };
