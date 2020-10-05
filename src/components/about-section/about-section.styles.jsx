import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  border: 1px solid ${({ theme }) => theme['secondary-color']};
  border-radius: 10px;
  padding: 10px 20px;
  margin-right: 25px;
  width: auto;
  background: ${({ theme }) => theme['background']};
  box-shadow: ${({ theme }) => theme['box-shadow']};
`;

export const Image = styled.img`
  height: 300px;
  width: 300px;
`