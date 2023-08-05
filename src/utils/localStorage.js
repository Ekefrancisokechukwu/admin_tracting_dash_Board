export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;

  return user;
};

// export const getStorageTheme = () => {
//   let theme = "light-theme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }

//   return theme;
// };
