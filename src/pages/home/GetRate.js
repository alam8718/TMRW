import { toast } from "react-toastify";
const yes = () => {
  toast.success("Successfully Rated!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  })
}
const no = () => {
  toast.error("Something went wrong!!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  })
}


export const rateMovie = async (movieID, rating) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/rating?guest_session_id=${localStorage.getItem(
        "guest_session_id"
      )}&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json;chatset=utf-8",
        },
        body: JSON.stringify({
          value: rating,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Movie Rating submitted", data);
      if (data.success) {
        yes()
      } else {
        no()
      }
      return data

    } else {

      throw new Error("ERROR: rating of movie failed to submit");
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const rateTvshow = async (showID, rating) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${showID}/rating?guest_session_id=${localStorage.getItem(
        "guest_session_id"
      )}&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json;chatset=utf-8",
        },
        body: JSON.stringify({
          value: rating,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Movie Rating submitted", data);
      if (data.success) {
        yes()
      } else {
        no()
      }
      return data;
    } else {
      throw new Error("ERROR: rating of movie failed to submit");
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
