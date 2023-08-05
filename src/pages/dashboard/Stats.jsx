import { useEffect } from "react";
import { showJobStats } from "../../features/jobs/alljobsSlice";
import { useDispatch } from "react-redux";
import ChartsContainer from "../../components/ChartsContainer";

const Stats = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showJobStats());
  }, []);

  return (
    <>
      <ChartsContainer />
    </>
  );
};
export default Stats;
