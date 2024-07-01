import styled from "styled-components";

export const Container = styled.div`
  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 90vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;


export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;

`;
//bloquear o forms

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;



export const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
  backgroundColor: '#f0f0f0'
};

export const formStyle = {
  width: '100%',
  maxWidth: '600px',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

export const Select = {
  padding: '12px 10px',
  outline: 'none',
  border: '1px solid ',
  borderRadius: '10px',
  width: '100%',
  cursor: 'pointer',
  backgroundcolor: '#046ee5',
  color: 'black',
  fontweight: '600',
  fontsize: '16px',
  maxwidth: '300px'
};



