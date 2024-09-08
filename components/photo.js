import React from 'react';
import styled from 'styled-components';

const Preview = styled.div`
  border: 5px white solid;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  max-width: 160px;
  overflow: hidden;
  cursor: grabbing;
  margin: auto;

  img {
    object-fit: cover;
    height: 100px;
    width: 100px;
  }
`;

export default function Photo({ image, preview }) {
  return (
    preview ? (
      <Preview>
        <img src={image} alt="" />
      </Preview>
    ) : (
      <img src={image} alt="" />
    )
  );
}
