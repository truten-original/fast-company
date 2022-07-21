export const paginate = (users, currentPage, countItemsOnPage) => {
  const startIndex = (currentPage - 1) * countItemsOnPage
  return [...users].splice(startIndex, countItemsOnPage)
}
