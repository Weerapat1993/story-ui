import styled from 'styled-components';

export const HideMobile = styled.div`
  @media (max-width: 479px) {
    display: none;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const HideDesktop = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
