import styled from 'styled-components';

const Input = styled.input`
  /* Adapt the colors based on primary prop */
  background:  ${({ theme }) => theme.colors.contrastText};
  color:  ${({ theme }) => theme.colors.primary};
  font-size: 1em;
  margin: 5px 15px;
  padding: 0.5em;
  border: 2px solid ${({ theme }) => theme.colors.textos};
  border-radius: 5px;
  width:90%;
`;

export default Input;
