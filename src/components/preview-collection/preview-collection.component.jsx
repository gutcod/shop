import React from "react";

import CollectionItem from "../collection-items/collection-items.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./preview.collection.style";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {
        //items===other...rest from Collection const.
        items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
