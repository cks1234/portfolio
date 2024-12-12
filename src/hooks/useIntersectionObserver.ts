import { useEffect } from 'react';

interface SectionRefs {
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export const useIntersectionObserver = (
  refs: SectionRefs,
  setActiveSection: (section: string) => void
) => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    if (refs.aboutRef.current) observer.observe(refs.aboutRef.current);
    if (refs.skillsRef.current) observer.observe(refs.skillsRef.current);
    if (refs.projectsRef.current) observer.observe(refs.projectsRef.current);
    if (refs.contactRef.current) observer.observe(refs.contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, [refs, setActiveSection]);
};