import  sanityClient  from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";

export const client =sanityClient(
    {
        projectId:"y7vlgl7x",
        dataset:"productio",
        apiVersion:"2022-03-25",
        useCdn:true,
    }
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);