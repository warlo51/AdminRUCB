interface ImportMetaEnv {
    readonly SANITY_STUDIO_PROJECTID: string;
    readonly SANITY_STUDIO_DATASET: string;
    readonly SANITY_STUDIO_TITLE: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
