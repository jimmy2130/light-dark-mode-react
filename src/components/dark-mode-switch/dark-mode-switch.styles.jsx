import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;
  position: fixed;
  right: 25px;
  top: 30px;
`;

export const ToggleIcon = styled.span`
  margin-right: 10px;
  font-size: 1rem;
`;

export const ToggleText = styled.span`
  position: relative;
  top: -4px;
  right: 20px;
  color: ${({ theme }) => theme['on-background']};
  user-select: none; 
`;

export const ThemeSwitch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
`;

export const Slider = styled.div`
  background: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
  }
`;

export const RoundSlider = styled(Slider)`
  border-radius: 34px;

  &:before {
    border-radius: 50%;
  }
`
export const CheckBox = styled.input`
  display: none;

  &:checked + ${Slider} {
    background: ${({ theme }) => theme['primary-color']};
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

// https://spectrum.chat/styled-components/general/dynamically-change-size-for-fontawesome-icons-using-styled-components-and-nextjs~5b68c8de-6f40-4e84-9109-3654e865721d
export const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-right: 5px;
`