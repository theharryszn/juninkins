import PageContainer from "@/components/PageContainer.vue";
import type { Plugin } from "vue";

declare module "vue" {
  interface ComponentCustomProperties {
    $locomotiveScroll: any;
  }
}

export default {
  install(app) {
    app.component("pageContainer", PageContainer);
  },
} as Plugin;
