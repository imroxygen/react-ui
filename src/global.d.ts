declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
declare global {
  interface Window {
    appLocalizer?: {
      khali_dabba: boolean;
      countries?: string;
      open_uploader?: string;
      default_logo?: string;
      mvx_tinymce_key?: string;
    };
  }
}

export {};

