import tw from 'twin.macro'
import styled from 'styled-components'

const Navbar = styled.div(({ }) => [
  tw`justify-between px-10 py-5 grid grid-flow-col gap-4`
]);

const Navlink = styled.a(({ }) => [
  tw`p-2 md:p-1`,
]);

export { Navbar, Navlink }