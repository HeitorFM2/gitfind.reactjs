import styled from "styled-components";

export const HeaderStyle = styled.div `
    width:100%;
    background-color: #161b22;
    height: 5.5rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchProfile = styled.div`

    width: 50%;

    input {
        border-radius: 13px;
        min-width: 250px;
        width: 75%;
        margin-right: 5px;
        border: 1px solid #4a4a4a;
        background: #1D2128;
        font-size: 15px;
        padding: 10px;
        color:#FFFFFF;
    }

    button{
        border-radius: 13px;
        margin-right: 12px;
        min-width: 100px;
        border: 1px solid #4a4a4a;
        background: #1D2128;
        font-size: 15px;
        padding: 10px;
        color: #FFFFFF;
        cursor: pointer;
    }

    button:hover{
        background: #26292e; 
    }
`

export const IconHeader = styled.img`

    width: 50px;
    margin-right: 50px;

`