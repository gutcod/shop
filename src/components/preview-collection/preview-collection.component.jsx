import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import CollectionItem from "../collection-items/collection-items.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./preview.collection.style";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
