import customFetch from "../../utils/axios";

export const getallJobsThunk = async (_, thunkAPI) => {
  const { searchStatus, searchType, sort, page, search } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;

  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("there was an error");
  }
};

export const showJobStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats");
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
