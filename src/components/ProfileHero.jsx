import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { IoIosApps } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

const links = ["app", "setting", "message"];

const ProfileHero = () => {
  const { user } = useSelector((store) => store.user);

  const refBtn = useRef(null);

  const handleChange = (e) => {
    let width = e.target.offsetWidth;
    let left = e.target.offsetLeft;
    let top = e.target.offsetTop;

    refBtn.current.style.width = width + "px";
    refBtn.current.style.transform = ` translate3d( ${left}px,${top}px, 0px)`;
  };

  return (
    <Wrapper>
      <div className="profile-hero"></div>
      <div className="profile-user">
        <div className="user-info">
          <img
            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            alt=""
            style={{ width: "6rem", borderRadius: "15px" }}
          />
          <div className="">
            <h1 className="user-name">
              {user?.name} {user?.lastName}
            </h1>
            <h4 className="admin">Admin</h4>
          </div>
        </div>

        <div className="btn-containar">
          <button className="btn" onClick={handleChange}>
            <IoIosApps /> App
          </button>
          <button className="btn" onClick={handleChange}>
            <BiSolidMessageDetail />
            Message
          </button>
          <button className="btn" onClick={handleChange}>
            <HiWrenchScrewdriver />
            Setting
          </button>
          <div className="active" ref={refBtn}></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .profile-hero {
    height: 25rem;
    border-radius: var(--rounded-lx);
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_5HYsSbyuAsEbpDwtXTeezmZLu3_vmIfEJu6iBsU0tuqTqUn");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .active {
    padding: 1.5rem 1rem;
    background: #ffffff5d;
    box-shadow: 0 1px 5px #cccccc80;
    border-radius: 8px;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    display: flex;
    flex: auto;
    position: absolute;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .profile-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--profile-color);
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3.7rem;
    padding: 1rem;
    border-radius: var(--rounded-lx);
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(10px);
    border: 1px solid #cccccc80;

    @media (max-width: 603px) {
      flex-wrap: wrap;
      gap: 3rem;
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .user-name {
    color: var(--gray-200);
    font-size: 1.8rem;
    text-transform: capitalize;
  }

  .admin {
    font-size: 1.4rem;
    margin-top: 0.8rem;
  }

  .btn-containar {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding-right: 4rem;
    position: relative;

    @media (max-width: 603px) {
      flex-direction: column;
      gap: 3rem;
      justify-self: center;
    }
  }

  .btn {
    font-size: 1.4rem;
    color: var(--gray-200);
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`;
export default ProfileHero;
