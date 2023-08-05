import ToggleSwitch from "./ToggleSwitch";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CiFacebook } from "react-icons/ci";
import { PiTwitterLogoLight } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { chatsData } from "../utils/data";
import { styled } from "styled-components";
import { openForm } from "../features/user/userSlice";

const ProfileInfos = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="content">
        <article className="user-box">
          <h1 className="header">PlatForm Settings</h1>

          <h5 className="sub-head">Account</h5>

          <div className="info">
            <ToggleSwitch /* check={true} */ />
            <label htmlFor=""> Email me when someone follows me</label>
          </div>

          <div className="info">
            <ToggleSwitch name="mention" />
            <label htmlFor=""> Email me when someone mentions me</label>
          </div>
          <div className="info">
            <ToggleSwitch />
            <label htmlFor="">
              {" "}
              Email me when someone answers on my post...
            </label>
          </div>

          <div className="application">
            <h5 className="sub-head">Application</h5>
            <div className="info">
              <ToggleSwitch />
              <label htmlFor=""> New launches and projects</label>
            </div>

            <div className="info">
              <ToggleSwitch name={"update"} /* check={true} */ />
              <label htmlFor=""> Monthly product updates</label>
            </div>
            <div className="info">
              <ToggleSwitch /* check={true} */ />
              <label htmlFor=""> Subscribe to newsletter</label>
            </div>
          </div>
        </article>

        <article className="user-box">
          <h1 className="header">
            Profile Information
            <span className="edit-user" onClick={() => dispatch(openForm())}>
              <FaUserEdit />
              <span className="user-tootip">Edit Profile</span>
            </span>
          </h1>

          <p className="paragraph">
            Hi, I’m {user?.name} {user?.lastName}, Decisions: If you can’t
            decide, the answer is no. If two equally difficult paths, choose the
            one more painful in the short term (pain avoidance is creating an
            illusion of equality).
          </p>

          <ul className="user-infomations">
            <li className="info-item">
              <h3>Full Name:</h3>
              <span>
                {user?.name} {user?.lastName}
              </span>
            </li>

            <li className="info-item">
              <h3>Mobile:</h3>
              <span>(44) 123 1234 123</span>
            </li>
            <li className="info-item">
              <h3>Email:</h3>
              <span>{user?.email}</span>
            </li>

            <li className="info-item">
              <h3>Location:</h3>
              <span>{user?.location}</span>
            </li>

            <li className="info-item">
              <h3>Social:</h3>
              <span className="social">
                <CiFacebook />
                <PiTwitterLogoLight />
                <BsInstagram />
              </span>
            </li>
          </ul>
        </article>

        <article className="user-box">
          <h1 className="header">Conversations</h1>

          <ul className="chat">
            {chatsData.map((data) => {
              return (
                <li className="chat-avater" key={data.id}>
                  <img
                    src={data.img}
                    alt={data.name}
                    style={{ width: "4.5rem", borderRadius: "13px" }}
                  />
                  <div className="">
                    <h3 className="avater-name">{data.name}</h3>
                    <p>{data.msg}</p>
                  </div>

                  <button className="chat-btn">Reply</button>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;

    @media (max-width: 391px) {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }

  .avater-name {
    color: var(--gray-200);
  }
  .edit-user {
    cursor: pointer;
    position: relative;

    svg {
      font-size: 1.8rem;
    }
  }

  .edit-user:hover .user-tootip {
    opacity: 1;
    visibility: visible;
  }

  .user-box {
    background: var(--white);
    padding: 1.5rem;
    border-radius: var(--rounded-lx);
  }

  .header {
    font-size: 1.5rem;
    color: var(--gray-200);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    font-size: 1.3rem;
    margin-top: 2rem;
  }

  .sub-head {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .paragraph {
    margin-top: 1.5rem;
    font-size: 1.3rem;
  }

  .user-infomations {
    margin-top: 4.4rem;
  }

  .application {
    margin-top: 3rem;
  }
  .info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    margin-bottom: 2rem;

    h3 {
      color: var(--gray-200);
    }

    span {
      text-transform: capitalize;
    }
  }

  .social {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .chat {
    margin-top: 2rem;
  }

  .chat-avater {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      margin-top: 0.7rem;
      font-size: 1.2rem;
    }

    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
  .chat-btn {
    margin-left: auto;
    color: var(--primary-50);

    &:hover {
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      color: transparent;
      animation: scale 0.3s;

      @keyframes scale {
        0% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
export default ProfileInfos;
