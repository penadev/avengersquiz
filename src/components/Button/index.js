import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:  ${({ theme }) => theme.colors.secondary};
  color:  ${({ theme }) => theme.colors.contrastText};
  font-size: 1em;
  margin: 5px 15px;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.textos};
  border-radius: 5px;
  font-weight:bold;
  width:90%;
`;

export default Button;
