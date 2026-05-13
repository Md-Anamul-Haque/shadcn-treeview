"use client";

import { cn } from "@/lib/utils";
import { DropPosition } from "../tree-view";

interface TreeDropIndicatorProps {
  depth: number;
  indentationWidth: number;
  className?: string;
  currentDropPosition: DropPosition;
}

export function TreeDropIndicator({
  depth,
  indentationWidth,
  className,
  currentDropPosition,
}: TreeDropIndicatorProps) {
    return (
    <div
      data-slot="tree-drop-indicator"
      className={cn(
        "pointer-events-none absolute right-0 h-0.5 bg-primary",
        currentDropPosition === "before" ? "top-0" : "bottom-0",
        className,
      )}
      style={{
        left: depth * indentationWidth,
      }}
    />
  );
}
