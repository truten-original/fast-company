export const publishTimeCreator = (createTime) => {
  const date = Date.now()
  const timeAgo = (Number(date) - Number(createTime))/60000
  const currentDate = new Date(Number(createTime))
  let time
  if (timeAgo <= 1) {
    time = "1 минуту назад"
  } else if (timeAgo <= 5 && timeAgo > 1) {
    time = "5 минут назад"
  } else if (timeAgo <= 10 && timeAgo > 5) {
    time = "10 минут назад"
  } else if (timeAgo <= 30 && timeAgo > 10) {
    time = "30 минут назад"
  } else if (timeAgo <= 24 * 60 * 60 && timeAgo > 30) {
    const hours = Math.floor(timeAgo / 60)
    const minutes = Math.floor(timeAgo - hours * 60)
    time =  `${hours}.${minutes}`
  } else if (timeAgo <= 24 * 60 * 60 * 365 && timeAgo > 24 * 60 * 60) {
    const mounths = currentDate.getMonth() + 1
    const day = currentDate.getUTCDate()
    time = `${day}.${mounths}`
  } else if (timeAgo > 525600) {
    const year = currentDate.getUTCFullYear()
    const mounths = currentDate.getMonth() + 1
    const day = currentDate.getUTCDate()
    time = `${day}.${mounths}.${year}`
  }
  return time
}
