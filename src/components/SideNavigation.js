import React from 'react';
import styled from 'styled-components';
import useIntersect from '../pages/useIntersect';

const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 24px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  text-transform: lowercase;
  font-family: bodoni;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 4px;
  padding: 12px;
  padding-bottom: 64px;
  opacity: 1;
  &:hover {
    color: darkslategray;
    cursor: pointer;
  }
`;

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const SideNavigation = props => {
  const { links, show } = props;
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray()
  });

  console.log(entry.intersectionRatio);
  return (
    <React.Fragment>
    {show &&
    <SideNavigationContainer ref={ref} ratio={entry.intersectionRatio}>
    {links?.map((link, index) => {
      return (
        <Link 
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay={`${index + 1}00`}
          href={link.href}> {link.label} </Link>
        )
    })}
    </SideNavigationContainer>}
    </React.Fragment>
  )
}

export default SideNavigation;