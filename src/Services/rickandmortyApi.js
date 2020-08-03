export const fetchList = (currentPage) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(res => res.json());
};
