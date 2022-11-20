import styled from "styled-components";

export const Contents = styled.div`
    position: relative;

    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
`

export const Backgroundimg = styled.img`
    margin-top: 120px;
    opacity: 0.2;
    height: 70vh;
    width: 75vh;
    position: fixed;
    left: -20rem; 
    z-index: -1;
`

export const Info = styled.div`
    width: 60%;
    margin-right: 90px;
    margin-top: 40px;
    color: #FFFFFF;
    font-family: Inter, Roboto, Arial;
`

export const SearchProfile = styled.div`
    margin-top: 40px;

    input {
        border-radius: 13px;
        min-width: 250px;
        width: 75%;
        margin-right: 12px;
        border: 1px solid #999999;
        background: #1D2128;
        font-size: 15px;
        padding: 10px;
        color:#FFFFFF;
    }

    button{
        border-radius: 13px;
        margin-right: 12px;
        min-width: 100px;
        border: 1px solid #999999;
        background: #2D333B;
        font-size: 15px;
        padding: 10px;
        color: #FFFFFF;
        cursor: pointer;
    }

    button:hover{
        background: #21252b; 
    }
`

export const DivProfile = styled.div`
    display: flex;
    justify-content: center;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    background: linear-gradient(160deg, #1a1b1e 10%, #313844);
    box-shadow: 3px 3px 7px black;
    border-radius: 20px 0px 20px 0px;
    height: 14rem;
    width: 60rem;
    border: 1px solid #4a4a4a;

    h3{
        color: #b3b3b3;
        font-size: 24px;
        font-family: Inter, Roboto, Arial;
        
    }

    span{
        display: block;
        color: #b3b3b3;
        font-size: 12px;
        margin: 0;
    }

    p{
        color: #b3b3b3;
        font-size: 13px;
        margin: 20px 0 0 0;
    }
`

export const ImgProfile = styled.img`
    border-radius: 102px;
    width: 200px;
    height: 200px;
    border: 1px solid #E5E5E5;
    margin-right: 42px;
    margin-left: 20px;
`

export const Repositories = styled.div`
    h4{
        font-size: 24px;
        color: #b3b3b3;
        margin: 12px 0;
        text-align: center;
        font-family: Inter, Roboto, Arial;
        margin-top: 20px;
    }
`

export const ProfileDesc = styled.div`
    height: 100%;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
`