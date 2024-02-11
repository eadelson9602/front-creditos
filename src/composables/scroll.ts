import { scroll } from 'quasar';

const { setVerticalScrollPosition } = scroll;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const scrollTo = (id: any) => {
  const el = document.getElementById(id);

  if (el) {
    scrollPage(el);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollPage = (el: any) => {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.scrollY || document.documentElement.scrollTop,
    offset = rect.top + scrollTop - 50; // allow for toolbar height

  setVerticalScrollPosition(window, offset, 500);
};
