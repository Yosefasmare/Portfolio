export const FETCH_PROJECTS = `*[_type == "projects"] | order(createdAt desc) [0...6]`;
export const FETCH_TESTIMONT = `*[_type == "testimony"]`