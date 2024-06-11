'use client';
import React from "react";
import * as Styled from "./minimal-blog.styles";

function MinimalBlog() {
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.ImageHeader src="/cactus_img.jpg" alt="Cactus image" />
        <Styled.Tag>Design</Styled.Tag>
        <Styled.Title>Embracing Minimalism</Styled.Title>
        <Styled.Description>
          From minimalist sculptures to minimalist paintings, this blog will
          inspire you to appreciate the beauty that lies in simplicity.
        </Styled.Description>
        <Styled.Author>Annie Spratt</Styled.Author>
      </Styled.Card>
    </Styled.Container>
  );
}

export { MinimalBlog };