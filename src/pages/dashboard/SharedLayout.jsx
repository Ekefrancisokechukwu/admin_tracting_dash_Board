import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "../../components/Navbar";
import BigSidebar from "../../components/BigSidebar";
import Settings from "../../components/Settings";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <BigSidebar />
          <div>
            <Navbar />
            <Settings />
            <div className="dashboard-page">
              <Outlet />
              <Footer />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background: var(--gray-50);

  .dashboard {
    display: grid;
    padding: 0 1rem;
    grid-template-columns: 1fr;

    @media (max-width: 330px) {
      display: block;
      padding: 0;
    }
  }

  .dashboard-page {
    padding: 1rem 2rem;

    @media (max-width: 330px) {
      padding: 1rem 2rem;
    }
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  }
`;

export default SharedLayout;
