import React from "react";
import { useDrag } from "@use-gesture/react";

export const MyItem = (props) => {
  const { itemInfo, onDelete } = props;
  const selfRef = React.useRef(null);

  const onRemoveItem = React.useCallback(() => {
    if (!selfRef.current) return;
    console.log(selfRef.current);
    (selfRef.current as HTMLLIElement).classList.add("removed");

    selfRef.current.ontransitionend = () => {
      onDelete(selfRef.current, itemInfo.id);
    };
  }, [selfRef, itemInfo.id]);

  const bind = useDrag((state) => {
    console.log(state);
  });
  return (
    <li
      id={itemInfo.id + "-" + itemInfo.name}
      ref={selfRef}
      style={{
        minWidth: "100vw",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "500ms",
        border: "2px solid red",
        marginBottom: "1rem"
      }}
      {...bind()}
    >
      {itemInfo.name}-{itemInfo.occupation}
      <button
        onClick={() => {
          onRemoveItem();
          // alert("list item clicked");
        }}
      >
        click to delete
      </button>
    </li>
  );
};
