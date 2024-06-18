import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  padding: 0.5rem;
  background-color: #7f7eff;
  color: white;
  border-radius: 5px;
  width: 8rem;
  text-align: center;
  cursor: pointer;
  height: 1.5rem;
  transition: all 0.5s;
  box-shadow: 3px -4px 0 #a390e4;
  &:active {
    box-shadow: 1px 1px 0 #a390e4;
  }
`;

const Button = ({ children }: { children: React.ReactNode }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
