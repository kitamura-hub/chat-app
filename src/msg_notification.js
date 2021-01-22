import { WEBHOOK_URL } from './web_hook_config.js';

export const sendPushNotification = (string) => {
  if (string === "masato kitamura" || string === "cat") return;

  const payload = {
    text: `${string} さんがログインしました \n`
        + "<https://chat-app2021-0115.web.app/|お手軽チャット>"
  };

  fetch(WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(() => {
    alert(`${string} さん、ようこそ`);
  });
}