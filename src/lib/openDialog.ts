import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";
export const openDialog = (options) => {
  const { title, maincontent,ok,cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return  h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newvisible) => {
            if (newvisible === false) {
              app.unmount();
              div.remove();
            }
          },
          ok,cancel
        },
        {title: () => title, maincontent: () => maincontent}
      );
    },
  });
  app.mount(div);
};
