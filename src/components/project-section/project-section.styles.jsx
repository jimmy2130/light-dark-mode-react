import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  min-width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 10px;
  border: 2px solid ${({ theme }) => theme['primary-color']};
  font-size: 15px;
  outline: none;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme['primary-color']};
  color: ${({ theme }) => theme['on-primary']};

  &:hover {
    filter: brightness(110%);
  }
`

export const SecondaryButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme['secondary-color']};
  background: ${({ theme }) => theme['secondary-color']};
  color: ${({ theme }) => theme['on-primary']};

  &:hover {
    filter: brightness(110%);
    background: ${({ theme }) => theme['secondary-color']};
    color: ${({ theme }) => theme['on-primary']};
  }
`;

export const OutlineButton = styled(Button)`
  background: ${({ theme }) => theme['background']};
  color: ${({ theme }) => theme['on-background']};

  &:hover {
    background: ${({ theme }) => theme['primary-color']};
    color: ${({ theme }) => theme['on-primary']};
  }

  &.secondary {
    border: 2px solid ${({ theme }) => theme['secondary-color']};
  }

  &.secondary:hover {
    background: ${({ theme }) => theme['secondary-color']};
    color: ${({ theme }) => theme['on-primary']};
  }
`;

export const TextBox = styled.div`
  width: 40%;
  text-align: justify;
  background: ${({ theme }) => (theme.mode === 'light' ) ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'};
  color: ${({ theme }) => theme['on-primary']};
  border-radius: 10px;
  padding: 30px;
`;

export const Paragraph = styled.p`
  margin: 0;
  line-height: 25px;
`;