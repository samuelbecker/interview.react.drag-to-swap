import React from 'react';
import styled from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Photo from './photo';

const PrintPhoto = styled.div`
  opacity: ${({ isActive, isOver }) => isActive || isOver ? 0.5 : 1};
  touch-action: none;
  width: calc(50% - 10px);
  cursor: grab;

  img {
    max-width: 100%;
  }
`;

export default function SortableItem({ id, image, pageId }) {
  const {
    attributes,
    listeners,
    isSorting,
    isDragging,
    over,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: image,
    data: {
      pageId,
      itemId: id,
      image
    }
  });

  return (
    <PrintPhoto
      ref={setNodeRef}
      isActive={isDragging}
      isOver={over?.id === image}
      style={{
        transition,
        transform: isSorting ? undefined : CSS.Translate.toString(transform),
      }}
      {...attributes}
      {...listeners}
    >
      <Photo image={image} />
    </PrintPhoto>
  );
}
