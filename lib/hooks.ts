import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActive, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
      console.log(sectionName)
    }
  }, [inView, setActive, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}