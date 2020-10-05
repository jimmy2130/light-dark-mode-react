import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = styled(FontAwesomeIcon)`
  font-size: 100px;
  margin-right: 50px;
  cursor: pointer;
  color: ${({ theme }) => theme['primary-color']};
`;