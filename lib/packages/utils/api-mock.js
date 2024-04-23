export const mockGetWorkItemList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, taskName: "任务1" },
        { id: 2, taskName: "任务2" },
        { id: 3, taskName: "任务3" },
        { id: 4, taskName: "任务4" },
      ]);
    }, 1000);
  });
};

export const mockGetUserList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "张三" },
        { id: 2, name: "李四" },
        { id: 3, name: "王五" },
        { id: 4, name: "赵六" },
      ]);
    }, 1000);
  });
};
