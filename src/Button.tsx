import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  all: unset;
  padding: 0.5rem;
  background-color: #e5989b;
  color: white;
  border-radius: 5px;
  width: 8rem;
  text-align: center;
  cursor: pointer;
  height: 1.5rem;
  transition: all 0.5s;
  box-shadow: 1px -2px 0 #ffb4a2, 3px -4px 0 #ffcdb2;
  &:active {
    box-shadow: 1px 1px 0 #ffcdb2;
  }
`;

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
