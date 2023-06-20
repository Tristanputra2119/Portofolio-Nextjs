import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ygg155',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
