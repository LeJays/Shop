import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({image: {maxFileSize: "2MB"},})
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {

      console.log("file url", file.Url, metadata);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      //return { uploadedBy: metadata.userId };
    }),
} ;
