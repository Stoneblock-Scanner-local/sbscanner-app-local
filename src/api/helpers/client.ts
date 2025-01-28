export const myFetch = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, { ...options });

  if (!response.ok) {
    throw new Error((await response.json()).msg);
  }

  return response;
};

export const buildFormData = (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  return formData;
};
