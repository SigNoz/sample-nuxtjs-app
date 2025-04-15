export default defineEventHandler(async (event) => {
  const uri = `https://dog.ceo/api/breeds/image/random`

  try {
    const data = await $fetch(uri)
    if (data && data.message) {
      return data.message
    } else {
      throw new Error('API response does not contain a "message" property')
    }
  } catch (error) {
    return { error: 'Failed to fetch dog image', details: error.message }
  }
})
