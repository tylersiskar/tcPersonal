import React, { Fragment } from 'react';
import styled from 'styled-components';
import useIntersect from '../../pages/useIntersect';

const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-top: 24px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Link = styled.a`
  width: fit-content;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 20px;
  padding: 12px;
  margin-bottom: 64px;
  opacity: 1;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const SideNavigation = props => {
  const { links, show } = props;
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray()
  });

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default SideNavigation;