import { getEntry, z, type CollectionKey } from "astro:content"

import { getHref } from "@/lib/get-href"

// type guard for reference object
function isPath(
  value: unknown
): value is `${string}/content/${CollectionKey}/string` {
  return typeof value === "string" && value.includes("/content/")
}

// type guard for array
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

// type guard for object
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

// Exported as a named function so it can be imported elsewhere
async function transformObject(value: unknown): Promise<any> {
  // reference object: replace with entry data
  if (isPath(value)) {
    const afterContent = value.split("/content/")[1]
    const collection = afterContent.split("/")[0] as CollectionKey
    const id = afterContent.split("/")[1].split(".")[0]
    const entry = await getEntry(collection, id)
    if (!entry) return value
    const data = entry.data
    // transform data WATCH OUT, FULLDEV SPECIFIC
    const transformedData = {
      collection: entry.collection,
      id: entry.id,
      href: getHref(entry),
      ...data,
    }
    return transformedData
  }

  // array: recursively process each item
  else if (isArray(value)) {
    const populatedArray = await Promise.all(
      value.map((item) => transformObject(item))
    )
    return populatedArray
  }

  // base case: primitive value
  if (!isObject(value)) {
    return value
  }

  // object: recursively process each property
  const result = {} as Record<string, unknown>
  const entries = Object.entries(value as Record<string, unknown>)
  for (const [key, val] of entries) {
    result[key] = await transformObject(val)
  }

  return result
}

// Recursively resolves references up to a specified depth (default is 3). Does not use type-level depth tracking.
async function transformReferences(value: unknown) {
  const depth1 = await transformObject(value)
  const depth2 = await transformObject(depth1)
  const depth3 = await transformObject(depth2)
  return depth3
}

export function preprocessReferences(schema: any) {
  return z.preprocess(async (value) => {
    const transformed = await transformReferences(value)
    return transformed
  }, schema)
}
