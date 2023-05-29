import axios from 'axios'

export type TPostCreateData = {
  title: string
  location: string
  shDesc: string
  tags: string
  image: string
  lgDesc: string
}

export type TPostEditData = Partial<TPostCreateData>

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'

export const postService = {
  getAllPosts: async () => {
    try {
      const res = await axios.get(BASE_URL + '/api/posts')

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  getPostsByUserId: async (userId: string) => {
    try {
      const res = await axios.get(BASE_URL + '/api/posts', {
        params: {
          user_id: userId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  getPostByPostId: async (postId: string) => {
    try {
      const res = await axios.get(BASE_URL + '/api/posts', {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  createPost: async (data: TPostCreateData) => {
    try {
      const res = await axios.post(BASE_URL + '/api/posts', data)

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  editPost: async (postId: string, data: TPostEditData) => {
    try {
      const res = await axios.patch(BASE_URL + '/api/posts', data, {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  deletePost: async (postId: string) => {
    try {
      const res = await axios.delete(BASE_URL + '/api/posts', {
        params: {
          post_id: postId
        }
      })

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  }
}