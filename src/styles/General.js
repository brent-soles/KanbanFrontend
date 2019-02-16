import styled from '@emotion/styled';

export const AppStyle = styled.div`
    & {
        margin: 0;
        padding: 0;
    }    

    text-align: center;
    
    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 24px;
        color: rgba(0, 0, 0, .5);
    }

    p {
        font-size: 20px;
    }
`

export const BoardStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    margin-bottom: 100px;
    min-width: 1080px;
    max-width: 100%;
    overflow-x: scroll;

`;