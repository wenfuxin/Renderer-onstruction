<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="{
          'align-right': message.target === 2,
          'align-left': message.target === 1,
        }"
      >
        <!-- 时间 -->
        <div  class="message-time">
          {{ formatTimestamp(message.timestamp) }}
        </div>
        <div v-if="message.type === 'text'" class="text-message">
          <div
            class="message-header"
            :class="{
              'header-align-right': message.target === 2,
              'header-align-left': message.target === 1,
            }"
          >
            <img :src="message.avatar" alt="Avatar" class="avatar" />
            <span class="nickname">{{ message.nickname }}</span>
            <span class="message-timestamp">{{
              formatTimestamp(message.timestamp)
            }}</span>
          </div>
          <div class="message-content">{{ message.content }}</div>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <!-- <div class="emoji-bar">
                                <span
                                        class="emoji"
                                        v-for="emoji in emojis"
                                        :key="emoji"
                                        @click="addEmoji(emoji)"
                                        >{{ emoji }}</span
                                >
                        </div> -->
      <el-input
        v-model="inputText"
        placeholder="请输入消息"
        @keyup.enter="sendMessage"
      ></el-input>
      <el-button type="primary" @click="sendMessage">发送</el-button>
    </div>
  </div>
</template>

<script>
// 引入images目录里面的图片列表
const images = require.context("../../assets/images", true, /\.png$/);

const imageList = images.keys().map((key) => images(key));
const userList = [
  {
    id: 1,
    name: "John Doe",
    avatar: imageList[Math.floor(Math.random() * imageList.length)],
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: imageList[Math.floor(Math.random() * imageList.length)],
  },
];

export default {
  name: "chart",
  displayName: "聊天",
  data() {
    return {
      messages: [],
      inputText: "",
      emojis: [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "😅",
        "🤣",
        "😂",
        "🙂",
        "🙃",
        "😉",
        "😊",
        "😇",
        "🥰",
        "😍",
        "🤩",
        "😘",
        "😗",
        "😚",
        "😙",
        "😋",
        "😛",
        "😜",
        "🤪",
        "😝",
        "🤑",
        "🤗",
        "🤭",
        "🤫",
        "🤔",
        "🤐",
        "🤨",
        "😐",
        "😑",
        "😶",
        "😏",
        "😒",
        "🙄",
        "😬",
        "🤥",
        "😌",
        "😔",
        "😪",
        "🤤",
        "😴",
        "😷",
        "🤒",
        "🤕",
        "🤢",
        "🤮",
        "🤧",
        "🥵",
        "🥶",
        "🥴",
        "😵",
        "🤯",
        "🤠",
        "🥳",
        "😎",
        "🤓",
        "🧐",
        "😕",
        "😟",
        "🙁",
        "☹️",
        "😮",
        "😯",
        "😲",
        "😳",
        "🥺",
        "😦",
        "😧",
        "😨",
        "😰",
        "😥",
        "😢",
        "😭",
        "😱",
        "😖",
        "😣",
        "😞",
        "😓",
        "😩",
        "😫",
        "🥱",
        "😤",
        "😡",
        "😠",
        "🤬",
        "😈",
        "👿",
        "💀",
        "☠️",
        "💩",
        "🤡",
        "👹",
        "👺",
        "👻",
        "👽",
        "👾",
        "🤖",
        "😺",
        "😸",
        "😹",
        "😻",
        "😼",
        "😽",
        "🙀",
        "😿",
        "😾",
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.inputText.trim() !== "") {
        this.messages.push({
          id: Date.now(),
          type: "text",
          content: this.inputText,
          timestamp: new Date(),

          target: 2,

          avatar: userList[1].avatar,
          nickname: userList[1].name,
        });
        this.inputText = "";
      }
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    },
    addEmoji(emoji) {
      this.inputText += emoji;
    },
  },
  mounted() {
    // Simulate receiving chat content
    setTimeout(() => {
      this.messages.push({
        id: Date.now(),
        type: "text",
        content: "Hello, how are you?",
        timestamp: new Date(),
        target: 1,

        avatar: userList[0].avatar,
        nickname: userList[0].name,
      });
    }, 1000);
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  /* margin-bottom: 10px; */
}

.text-message {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}

.image-message img {
  max-width: 100%;
  max-height: 200px;
}

.emoji-message {
  font-size: 24px;
}

.message-header {
  display: flex;
  align-items: center;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: #cccccc;
}

.nickname {
  font-weight: bold;
  margin-right: 5px;
}

.message-timestamp {
  font-size: 12px;
  color: #999999;
  margin-bottom: 5px;
}

.chat-input {
  display: flex;
}

.emoji-bar {
  display: flex;
  gap: 5px;
}

.emoji {
  cursor: pointer;
}

.align-right {
  text-align: right;
}

.align-left {
  text-align: left;
}
.header-align-right {
  justify-content: flex-end;
}
.header-align-left {
  justify-content: flex-start;
}
.message-content {
  word-break: break-all;
  padding: 15px 25px;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 5px;
  margin-top: 20px;
  display: inline-block;
}
</style>
