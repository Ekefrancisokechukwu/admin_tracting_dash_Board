import { useRef, useState, useEffect } from "react";

export const useAccord = () => {
  const refContainer = useRef(null);
  const refItem = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let item = refItem.current.clientHeight;
    if (isOpen) {
      refContainer.current.style.height = `${item}px`;
    } else {
      refContainer.current.style.height = 0;
    }
  }, [isOpen]);

  return { refContainer, refItem, isOpen, setIsOpen };
};
