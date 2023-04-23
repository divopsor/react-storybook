// addon-tab/register.js

import React from "react";
import { addons, types } from "@storybook/addons";

addons.register("readme", () => {
  addons.add("readme", {
    type: types.TAB,
    title: "Readme",
    route: ({ storyId, refId }) =>
      refId ? `/readme/${refId}_${storyId}` : `/readme/${storyId}`,
    match: ({ viewMode }) => viewMode === "readme",
    render: () => {
      return (
        <iframe
          width="100%"
          height="100%"
          src="http://localhost:6006/iframe.html?viewMode=docs&id=components-grid-system--docs"
        />
      );
    },
  });
});
