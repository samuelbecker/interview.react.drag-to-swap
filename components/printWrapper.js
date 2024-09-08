import React from 'react';
import Actions from "./actions";
import { SortableContext } from '@dnd-kit/sortable';
import SortableItem from './SortableItem';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

export default function PrintWrapper({ entry, pageId }) {
  return (
    <>
      <Header>
        <Title>{entry.title}</Title>
        <Actions />
      </Header>
      <PageLayout>
        <SortableContext id={pageId} items={entry.images}>
          {entry.images.map((image, imageId) => (
            <SortableItem key={imageId} image={image} pageId={pageId} id={imageId} />
          ))}
        </SortableContext>
      </PageLayout>
    </>
  );
};