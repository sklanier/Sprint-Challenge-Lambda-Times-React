import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const DivContainer1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const DivContainer2 = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const DivContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;


const DivContainer4 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const DivContainer5 = styled.div`
    ${props =>  
        props.left
        ? `
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
        ` 
        :null
    }
    ${props =>
        props.center
        ? `
        cursor: pointer;
         margin-right: 5%;
         &:hover{
            text-decoration: underline;
        }
        &:last-child {
            margin-right: 0;
        }
        `
        : null
    }
    ${props =>
        props.right
        ? `
        cursor: pointer;
        `
        : null
    }
    
`;

const Header2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const Header1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Header3= styled.div`
    ${props =>
        props.date
        ? `
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-left: 25px;
        flex: 1;
        `
        : null
    }
    ${props =>
        props.temp
        ? `
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: right;
        margin-right: 25px;
        flex: 1;
        `
            : null
    } 
`;

export {
    Div,
    DivContainer1,
    DivContainer2,
    DivContainer3,
    DivContainer4,
    DivContainer5,
    Header1,
    Header2,
    Header3
} 