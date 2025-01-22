// A dynamic CRUD utility that can be reused across HTML pages.
export const APIUtil = {
  // Base fetch method
  request: async (url, method, data = null, headers = {}) => {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      if (data) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(url, options);

      let result;
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = await response.text();
      }

      if (!response.ok) {
        throw new Error(result.message || result || 'Something went wrong');
      }

      return result;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  },

  // CRUD Methods
  get: async (url, headers = {}) => APIUtil.request(url, 'GET', null, headers),
  post: async (url, data, headers = {}) => APIUtil.request(url, 'POST', data, headers),
  put: async (url, data, headers = {}) => APIUtil.request(url, 'PUT', data, headers),
  patch: async (url, data, headers = {}) => APIUtil.request(url, 'PATCH', data, headers),
  delete: async (url, headers = {}) => APIUtil.request(url, 'DELETE', null, headers),
};
