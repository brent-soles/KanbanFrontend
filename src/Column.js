import React from 'react';
import styled from '@emotion/styled';
import { TertiaryButton, ActionButton } from './styles/Buttons';

const ColumnStyle = styled.div`
    margin: 12.5px;
    width: 100%;
    min-height: 200px;
    max-width: 600px;
    min-width: 400px;
    overflow: hidden;
    border-radius: 4px;
    transition: .2s;

    h1 {
        margin: auto 0px;
        text-align: left;
        color: white;
        transition: .3s;
    }

    .board-body {
        padding-bottom: 24px;
    }

    &:hover {
        box-shadow: 0px 3px 15px lightgrey;
    }
`;

const HeaderStyle = styled.div`
    display: grid;
    grid-template-columns: auto 100px;
    padding: 10px;
    margin-bottom: 24px;
    transition: .2s;
    background-color: ${props => props.headerColor};

    &:hover{
        transform: scale(1.00001);
        box-shadow: 0px 4px 12px lightgrey;
        padding: ${12.5 * 1.00001}px;

        button {
            color: white;
            font-size: 24px;
        }
    }
`;

class Column extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        // console.log(this.props)
        const { id, header, children, addCardHandler, deleteColumn } = this.props;
        return(
            <ColumnStyle className="column" {...this.props}>
                <HeaderStyle headerColor={this.props.headerColor} >
                    <h1>{header}</h1>
                    <ActionButton onClick={(e) => deleteColumn(e, id)}>{`--`}</ActionButton>
                </HeaderStyle>
                <div className="board-body">
                    {children}
                    <TertiaryButton onClick={(e) => addCardHandler(e, id)}>{`Create An Item`}</TertiaryButton>                    
                </div>
            </ColumnStyle>
        )
    }
}

export default Column;
