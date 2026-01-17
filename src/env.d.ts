/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.JPG' {
    const value: ImageMetadata;
    export default value;
}
