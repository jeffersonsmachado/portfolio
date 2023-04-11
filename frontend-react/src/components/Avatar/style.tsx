import tw, { css } from 'twin.macro'
import styled from 'styled-components'

const Figure = styled.figure(() => [
  tw`aspect-square bg-red-400`,
  css`
    & img {
      ${ tw`bg-white p-4 w-60 aspect-square rounded-full mx-auto` }
    }
  `
])

export { Figure }