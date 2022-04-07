const compareToken = (currentUserName) => {
  return localStorage.getItem(currentUserName);
};

export default compareToken;
