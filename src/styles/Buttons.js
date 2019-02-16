import styled from '@emotion/styled';
import { PrimaryColor, ActionColor } from './Colors'

const commonButtonStyles = `
    text-align: center;
    min-width: 80px;
    padding: 5px;
    margin: 5px;
    color: rgba(255, 255, 255, .3);
    border: none;
    border-radius: 4px;
    transition: .075s;

    &:hover {
        color: rgba(255, 255, 255, .7);
        
    }
`

export const PrimaryButton = styled.button`
    ${ commonButtonStyles }
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    background-color: ${PrimaryColor};
    
    &:hover {
        box-shadow: 0px 3px  10px lightgrey;
    }
`;

export const SecondaryButton = styled.button`
    ${ commonButtonStyles }
    font-size: 24px;
    font-weight: bold;
    padding: 2px;
    color: ${ PrimaryColor };
    background-color: transparent;
`;

export const TertiaryButton = styled.button`
    ${ commonButtonStyles }
    font-size: 20px;
    padding: 1px;
    background-color: transparent;
    padding: 2px;

`;

export const ActionButton = styled.button`
    ${ commonButtonStyles }
    font-size: 24px;
    background-color: ${ActionColor};
`;

