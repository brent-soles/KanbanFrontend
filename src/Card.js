import React from 'react';
import { TertiaryButton } from './styles/Buttons';
import styled from '@emotion/styled';

const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 100px auto 100px;

    p {
        display: inline-block;
		}

		button {
			background: transparent;
			color: #cecece;
		}
`;



const Card = ({ description, moveCardHandler, colIndex, elIndex }) => (
    <CardStyle className="card">
        <TertiaryButton value={'left'} onClick={(e) => moveCardHandler(e, colIndex, elIndex)} style={{display: 'inline-block'}}>{`<`}</TertiaryButton>
        <p style={{display: 'inline-block'}}>{description}</p>
        <TertiaryButton value={'right'} onClick={(e) => moveCardHandler(e, colIndex, elIndex)} style={{display: 'inline-block'}}>{`>`}</TertiaryButton>
    </CardStyle>
)

export default Card;
