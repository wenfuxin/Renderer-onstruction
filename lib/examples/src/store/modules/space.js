import { updateRoute, getQuery } from "@/utils/route";
import { getLocalStroge, setLocalStroge } from "@/utils/localStroge";

const mockgGetSpace = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: "1",
            name: "空间1",
            desc: "空间1描述",
          },
          {
            id: "2",
            name: "空间2",
            desc: "空间2描述",
          },
          {
            id: "3",
            name: "空间3",
            desc: "空间3描述",
          },
        ],
      });
    }, 1000);
  });
};

const getCurrentSpace = () => {
  // 从路由中获取空间id
  const spaceId = getQuery("spaceId");
  
  // 从本地获取空间列表
  const spaceList = getLocalStroge("spaceList") || [];
  
  // 如果有空间id，就过滤出当前空间
  // 如果没有空间id，给出提示并且清空当前空间
  if (spaceId) {
    const currentSpace = spaceList.find((item) => item.id === spaceId);
    if (currentSpace) {
      
      return currentSpace;
    } else {
      
      return {};
    }
  } else {
    
    return {};
  }
};

const state = {
  // 当前用户下的空间列表
  spaceList: getLocalStroge("spaceList") || [],
  // 当前所选空间
  currentSpace: getCurrentSpace(),
};

const mutations = {
  // 设置当前用户下的空间列表
  SET_SPACELIST(state, spaceList) {
    state.spaceList = spaceList;
    // 存到本地
    setLocalStroge("spaceList", spaceList);
  },
  // 清空空间列表
  CLEAR_SPACELIST(state) {
    state.spaceList = [];
    // 清空本地
    setLocalStroge("spaceList", []);
  },
  // 清空当前所选空间
  CLEAR_CURRENTSPACE(state) {
    state.currentSpace = {};
    updateRoute({
      spaceId: null,
    });
  },
  // 设置当前所选空间
  SET_CURRENTSPACE(state, currentSpace) {
    state.currentSpace = currentSpace;
    updateRoute({
      spaceId: currentSpace.id,
    });
  },
};
const actions = {
  // 接口获取所有空间
  getSpaceList({ commit }) {
    return new Promise((resolve, reject) => {
      mockgGetSpace()
        .then((res) => {
          commit("SET_SPACELIST", res.data);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 清空空间列表
  clearSpaceList({ commit }) {
    return new Promise((resolve, reject) => {
      commit("CLEAR_SPACELIST");
      commit("CLEAR_CURRENTSPACE");
      resolve();
    });
  },

  // 根据空间id过滤空间列表
  // 如果有空间id，就过滤出当前空间
  // 如果没有空间id，给出提示并且清空当前空间
  filterSpaceList({ commit, state }, spaceId) {
    if (spaceId) {
      const currentSpace = state.spaceList.find(
        (item) => item.id + "" === spaceId
      );
      if (currentSpace) {
        commit("SET_CURRENTSPACE", currentSpace);
      } else {
        commit("SET_CURRENTSPACE", {});
        
      }
    } else {
      
      commit("SET_CURRENTSPACE", {});
    }
  },

  // 通过filterSpaceList设置当前所选空间
  setCurrentSpace({ commit, dispatch }, spaceId) {
    return new Promise((resolve, reject) => {
      dispatch("filterSpaceList", spaceId);
      this.dispatch("project/getProjectList",spaceId).then(() => {
        resolve();
      });
    
    });
  },
  // 获取当前所选空间
  getCurrentSpace({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (state.currentSpace.id) {
        resolve(state.currentSpace);
      } else {
        this.$message.error("当前空间不存在");
        reject();
      }
    });
  },
};

export default {
  state,
  actions,
  mutations,
  namespaced: true,
};
