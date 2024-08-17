export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;

  if (!pathname.startsWith("/_next/")) {
    console.log("middleware working:", pathname);
  }
};

export const config = {
  matcher: ["/:path*"],
};

export default middleware;
