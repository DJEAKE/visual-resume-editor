// filepath: src/hooks/useSectionCollapse.js
import { useState } from "react";

export function useSectionCollapse() {
  const [collapsedMap, setCollapsedMap] = useState({});
  const isCollapsed = (id) => !!collapsedMap[id];
  const setIsCollapsed = (id, value) => {
    setCollapsedMap((prev) => ({ ...prev, [id]: value }));
  };
  return { isCollapsed, setIsCollapsed };
}