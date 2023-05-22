import React from "react";
import Box from "../ui/Box";
import { ImageProps } from "next/image";

type postImageProps = ImageProps & {
  images: string | string[];
};
const PostImage = ({ images = "/p1.jpg", alt, ...rest }: postImageProps) => {
  if (Array.isArray(images)) {
  }

  return (
    <Box className="post-image">
      <Image src={images} alt={name} />
    </Box>
  );
};

export default PostImage;
