import styled from 'styled-components'

export const DetailStyled = styled.main`
  max-inline-size: var(--max-width-detail);
  margin-inline: auto;
  padding-inline: 1.5rem;
  min-height: 100vh;
`

export const DetailJobSectionStyled = styled.section`
  background-color: var(--current-card-bg);
  border-radius: 6px;
  padding: 40px 1.5rem;
  
  @media (min-width: 480px) {
    padding: 48px;
  }
`

export const DetailHeader = styled.div`
  margin-bottom: 44px;
  
  .button {
    display: block;
    margin-top: 45px;
  }
  
  .title {
    color: var(--current-font-color);
    font-size: 20px;
    margin-block: 12px;
    word-wrap: break-word;
  }
  
  .location {
    color: var(--violet);
    font-weight: bold;
  }
  
  @media (min-width: 480px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 160px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "info info button"
    "title title button"
    "location location button";

    .title {
      grid-area: title;
      margin-block: 1px 8px;
    }
    .location {
      grid-area: location;
    }
    .button {
      grid-area: button;
      margin: 0;
      place-self: center;
    }
  }
`

export const DetailInfoRow = styled.div`
  color: var(--dark-grey);
  margin-top: 1.5rem;
  display: flex;
  gap: 12px;
  align-items: center;
  grid-area: info;
  
  span {
    display: flex;
    gap: 12px;
    align-items: center;
    
  }
  
  span:not(:last-child):after {
    content: '•';
    display: inline-block;
    margin-top: 5px;
  }
  
  @media (min-width: 480px) {
    margin: 0;
  }
`

export const LinkStyled = styled.a`
  border-color: transparent;
  padding-block: 1rem;
  padding-inline: 36px;
  background-color: var(--violet);
  color: var(--just-white);
  font-size: 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: hsla(233, 74%, 73%, 1.00);
  }
`

export const LinkStyledSecondary = styled.a`
  border-color: transparent;
  padding-block: 1rem;
  padding-inline: 36px;
  background-color: var(--current-secondary-color);
  color: var(--violet);
  font-size: 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: hsla(233, 74%, 73%, 1.00);
  }
`

export const DetailJobDescription = styled.p`
  line-height: 26px;
  color: var(--dark-grey);
`

export const DetailJobRequirementsSectionStyled = styled.div`
  margin-top: 40px;
  
  p {
    margin-block: 28px 1.5rem;
    color: var(--dark-grey);
  }
  
  ul {
    line-height: 26px;
    color: var(--dark-grey);
  }
  
  li {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  li:before {
    content: '•';
    display: inline-block;
    color: var(--violet);
    font-weight: bold;
  }
`

export const DetailJobRoleSectionStyled = styled.div`
  margin-top: 40px;
  
  p {
    margin-block: 28px 1.5rem;
    color: var(--dark-grey);
  }
  
  ol {

    line-height: 26px;
    color: var(--dark-grey);
    counter-reset: counter 0;
  }
  
  li {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  
  li:before {
    content: counter(counter);
    counter-increment: counter;
    color: var(--violet);
    font-weight: bold;
  }
`

export const DetailJobHowToApplySectionStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--current-card-bg);
  padding: 1.5rem 48px;
  margin-block: -24px 24px;
  border-radius: 6px;
  
  h2, a {
    margin-top: 1.5rem;
  }
  
  @media (min-width: 768px) {
    h2, a {
      margin-top: 0;
    }
    
    h2 {
      align-self: flex-end;
    }
    
    span {
      margin-top: 10px;
      place-self: self-start;
    }
    
    margin-top: -60px;
    display: grid;
    grid-template-columns: 140px 1fr 190px;
    grid-template-rows: 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    grid-template-areas:
      "logo name button"
      "logo website button";
    padding: 0 40px 0 0 ;
    row-gap: 0;
    min-height: 140px;
    overflow: hidden;

    .button { grid-area: button; }
  }
`

export const DetailJobLogoStyled = styled.figure<{
  color: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  min-inline-size: 50px;
  min-block-size: 50px;
  border-radius: 1rem;
  background-color: ${({ color }) => color};
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  
  @media (min-width: 768px) {
    position: static;
    grid-area: logo;
    transform: translateX(0);
    border-radius: 0;
    block-size: 100%;
  }
`

export const FooterStyled = styled.footer`
  margin-top: 64px;
  background-color: var(--current-card-bg);
  padding: 1.5rem;
  
  a {
    inline-size: 100%;
  }
  
  @media screen and (min-width: 480px) {
    a {
      max-inline-size: 160px;
    }
  }
`

export const FooterWrapperStyled = styled.div`
  max-inline-size: var(--max-width-detail);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  
  @media screen and (min-width: 480px) {
    padding-inline: 27px;
  }
`

export const FooterJobDetail = styled.div`
  display: none;
  
  span {
    color: var(--dark-grey);
  }
  
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
`

export const NotFoundCardStyled = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  border-radius: 1rem;
  background-color: var(--current-card-bg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img {
    inline-size: 100%;
  }
`
