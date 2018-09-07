import { extractGroupId } from "./urlUrils"

describe("Exctract group id from url", () => {
  it("Should return group id from group dashboard path", () => {
    expect(extractGroupId("/secure/admin/groups/1/dashboard")).toEqual("1")
  })
  it("Should return group id from group courses path", () => {
    expect(extractGroupId("/secure/admin/groups/1/courses")).toEqual("1")
  })
  it("Should return group id from group teacher files path", () => {
    expect(extractGroupId("/secure/admin/groups/1/teacher/files")).toEqual("1")
  })
  it("Should return null when path is null", () => {
    expect(extractGroupId(null)).toBeNull()
  })
  it("Should return null when path is empty", () => {
    expect(extractGroupId("")).toBeNull()
  })
  it("Should return null from groups path without id", () => {
    expect(extractGroupId("/secure/groups")).toBeNull()
  })
  it("Should return null from admin groups path", () => {
    expect(extractGroupId("/secure/admin/groups")).toBeNull()
  })
  it("Should return group id from admin groupId path", () => {
    expect(extractGroupId("/secure/admin/groups/1")).toEqual("1")
  })
})
