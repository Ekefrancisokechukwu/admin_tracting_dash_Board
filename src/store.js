import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import addJobSlice from "./features/addJob/addJobSlice";
import alljobsSlice from "./features/jobs/alljobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: addJobSlice,
    allJobs: alljobsSlice,
  },
});
