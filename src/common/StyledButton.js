// src/components/StyledButton.js
import styled from 'styled-components';

// Define the styled button component
const StyledButton = styled.button`
  background-color: yellow;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #a52a2a;
  }
`;

export default StyledButton;
