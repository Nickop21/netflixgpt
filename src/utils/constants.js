export const heroImage="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_small.jpg"

export const api_options= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9."+import.meta.env.VITE_TMDB_API_KEY
  }
};
