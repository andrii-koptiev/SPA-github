export function createPages(pages: number[], pagesCount: number, currentPage: number) {
  if (pagesCount > 10) {
    if (currentPage > 5) {
      // eslint-disable-next-line no-plusplus
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i);
        if (i === pagesCount) {
          break;
        }
      }
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i === pagesCount) {
          break;
        }
      }
    }
  } else {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}
