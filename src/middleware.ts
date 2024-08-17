export const middleware = (request) => {
  console.log('middleware working')
}

export const config = {
  matcher: ['/:path*']
}

export default middleware