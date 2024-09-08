import { useCallback, useState } from 'react';
import styled from "styled-components";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import Photo from './photo';
import PrintWrapper from './printWrapper';

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: #585858;
`;

export default function PrintPage({ data }) {
  const [items, setItems] = useState(data);
  const [activeItem, setActiveItem] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = useCallback(({ active }) => {
    setActiveItem(active.data.current);
  }, []);

  const handleDragEnd = useCallback(({ active, over }) => {
    if (active.id !== over.id) {
      const updatedItems = [...items];

      const { pageId: activePageId, itemId: activeItemId } = active.data.current;
      const { pageId: overPageId, itemId: overItemId } = over.data.current;

      const tempActiveImage = updatedItems[activePageId].images[activeItemId];
      const tempOverImage = updatedItems[overPageId].images[overItemId];

      updatedItems[activePageId].images[activeItemId] = tempOverImage;
      updatedItems[overPageId].images[overItemId] = tempActiveImage;

      setItems(updatedItems);
      setActiveItem(null);
    }
  }, [items]);

  const handleDragCancel = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel}>
      <Wrapper>
        {items.map((entry, pageId) => <PrintWrapper key={pageId} entry={entry} pageId={pageId} />)}
      </Wrapper>
      <DragOverlay dropAnimation={null} modifiers={[snapCenterToCursor]}>
        {activeItem ? (
          <Photo id={activeItem.id} image={activeItem.image} preview />
        ) : null}
      </DragOverlay>
    </DndContext >
  );
}