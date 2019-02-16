import React, { Component } from 'react';

// User added components
import Column from './Column';
import Card from './Card'
import { AppStyle, BoardStyle } from './styles/General'
import { PrimaryColor } from './styles/Colors';
import { PrimaryButton } from './styles/Buttons';

/* Helper Functions for LocalStorage */

const storeState = (state) => {
    if(!state){
        // Not allowed
        return undefined;
    }
    window.localStorage.setItem('kanban', JSON.stringify(state));
}

const loadState = () => {
    try{
        const stateString = window.localStorage.getItem('kanban');
        if(!stateString){
            return undefined;
        }
        return JSON.parse(stateString);
    } catch(err){
        return undefined;
    }
}

/* Main Component that holds all state and data minpulation functions */
class App extends Component {
    constructor(props){
        super(props);
        let initData = loadState();
        if( !initData ) {
            initData = {
                columns: []
            }
        }
        this.state = initData;
        
    }
  
    componentDidUpdate(){
        // Stores updated values in local storage
        storeState(this.state);
    }

    // Adds column to the Kanban Board
    columnAdd = (e) => {
        e.preventDefault();
        let input = window.prompt("What name woud you like?");
        if(!input){
            return;
        }
        // Spreads current arry, and pushes new value
        this.setState((state) => {
            return {
                columns: [...state.columns, { 
                        header: input.toString(),
                        colorValue: PrimaryColor,
                        data: []
                    }
                ]
            }
        })
    }

    // Delets a column from the Kanban
    deleteColumn = (e, colIndex) => {
        e.preventDefault();
        this.setState((state) => {
            // Filters base array of desired column to delete
            return {
                columns: state.columns.filter( ( _, index ) => {
                        if(index === colIndex) return false;
                        return true;
                    })
            }
        })
    }

    // Adds a card to a column on the Kanban
    addCard = (e, colIndex) => {
        e.preventDefault();
        let input = window.prompt("What would you like add?");
        if(!input){
            return;
        }

        this.setState((state) => {
            let board = state.columns;
            board[colIndex].data.push({ description: input });
            return {
                columns: board
            }
        })
    }

    // Moves a card from a Kanban to another based upon 
    moveCard = (e, colFrom, elemIndex) => {
        e.preventDefault();
        let shiftDirection = e.target.value === 'left' ? -1 : 1; // right === 1 or left === -1
        this.setState((state) => {
            let board = state.columns;
            
            // Computes if ard is going from leftmost to right most and vice-versa
            let toCol = colFrom + shiftDirection;
            if ( toCol < 0 ){
                toCol = board.length - 1;
            } else if ( toCol >= board.length ){
                toCol = 0;
            }

            // Switches the desired card to the new column
            // Filters out the stale value from the old column
            board[toCol].data.push(board[colFrom].data[elemIndex])
            board[colFrom].data = board[colFrom].data.filter( ( _, index ) => { 
                return index === elemIndex ? false: true } 
            );

            return {
                columns: board
            }
        })
    }

    render() {
        return (
        <AppStyle className="App">
            <BoardStyle>
                {this.state.columns.map((column, colIndex) => (
                    <Column
                        id={colIndex}
                        key={colIndex}
                        header={column.header}  
                        headerColor={column.colorValue ? column.colorValue : PrimaryColor} 
                        addCardHandler={this.addCard}
                        deleteColumn={this.deleteColumn}
                    >
                        {column.data.map( ( { description }, elIndex ) => {
                                return (
                                    <Card 
                                        key={elIndex*50} 
                                        description={description}
                                        colIndex={colIndex}
                                        elIndex={elIndex}
                                        moveCardHandler={this.moveCard} />
                                );
                            }
                        )}
                    </Column>
                ))}
            </BoardStyle>

            <PrimaryButton onClick={this.columnAdd}>{`+`}</PrimaryButton>
            <h2>{`Press '+' to add a column`}</h2>
        </AppStyle>
        );
    }
}

export default App;
