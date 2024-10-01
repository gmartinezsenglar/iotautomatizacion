export const defaultSession = {
  isLoggedIn: false,
  rol: null,
};

export const sessionOptions = {
  password: process.env.SECRET_KEY,
  cookieName: "sesion-hola",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    path: "/",
  },
};
