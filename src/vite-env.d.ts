/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL for the contact API when it is not same-origin (no trailing slash). */
  readonly VITE_CONTACT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
