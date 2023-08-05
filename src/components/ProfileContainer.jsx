import { styled } from "styled-components";
import ProfileInfos from "./ProfileInfos";

const ProfileContainer = () => {
  return (
    <Wrapper>
      <ProfileInfos />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3.5rem;
`;
export default ProfileContainer;
