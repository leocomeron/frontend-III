export const formatUserName = (username) => {
  return username.startsWith("@") ? username : "@" + username;
};
