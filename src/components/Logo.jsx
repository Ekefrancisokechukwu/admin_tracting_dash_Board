import { styled } from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <h1>
        Admin <span>Console</span>
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--black);

  span {
    color: var(--primary-50);
  }

  @media (min-width: 379px) {
    font-size: 1.5rem;
  }
`;
export default Logo;
