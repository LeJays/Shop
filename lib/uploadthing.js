"use client"
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";


export const Uploader = generateUploadButton();
export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone({
  endpoint: "imageUploader", // <--- obligatoire
});
