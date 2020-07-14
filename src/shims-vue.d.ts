declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}
