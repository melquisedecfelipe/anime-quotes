import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'variant'>

const wrapperModifiers = {
  filled: () => css`
    background: #000;
    color: #fff;
  `,
  outlined: () => css`
    background: #fff;
    border: 1px solid #000;
    color: #000;

    &:hover {
      background: #000;
      color: #fff;
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ variant }) => css`
    align-items: center;
    border: none;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Inter', monospace;
    font-size: 16px;
    height: 40px;
    justify-content: center;
    padding: 0 16px;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    width: max-content;

    > svg {
      height: 20px;
      width: 20px;
    }

    &:focus {
      border: 2px solid #000;
    }

    ${!!variant && wrapperModifiers[variant]()};
  `}
`
