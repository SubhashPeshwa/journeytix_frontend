import styled from 'styled-components';
import { media } from 'utils/media';

const SectionTitle = styled.div`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;

  ${media('<=tablet')} {
    display: none;
    font-size: 4.2rem;
    letter-spacing: 0em;
  }
`;

export default SectionTitle;
