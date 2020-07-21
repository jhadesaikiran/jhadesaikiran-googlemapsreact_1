const initState = {
  datas: [
    { id: "1", name: "drivername1", polyinestring: "1fsfbsoudhgbasou" },
    { id: "2", name: "drivername2", polyinestring: "2sfbsoudhgbasou" },
    { id: "3", name: "drivername3", polyinestring: "3fsfbsoudhgbasou" },
    { id: "4", name: "drivername4", polyinestring: "4fsfbsoudhgbasou" },
  ],
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_DATA":
      console.log("created project", action.project);
  }
  return state;
};

export default dataReducer;
