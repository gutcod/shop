import React from "react";
import CollectionPreview from "../preview-collection/preview-collection.component";
import { useSelector } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import { CollectionsOverviewContainer } from "./collection-overview";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionForPreview);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionForPreview,
// });

export default CollectionOverview;
