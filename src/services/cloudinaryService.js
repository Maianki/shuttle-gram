/**
 * Service to return all posts
 */

export const cloudinaryAPIService = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  data.append("cloud_name", process.env.REACT_APP_CLOUDNAME);

  try {
    let response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/image/upload`,
      {
        method: "post",
        mode: "cors",
        body: data,
      }
    );
    return response;
  } catch (err) {
    console.log(err.response);
  }
};
