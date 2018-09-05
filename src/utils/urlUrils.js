// regexp extract :groupId from /secure/groups/1 like urls
export const extractGroupId = url => {
  const match = /\/secure\/admin\/groups\/([\d\w-_]+).*/g.exec(url)
  return match && match.length > 1 ? match[1] : null
}
