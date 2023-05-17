export function middleware(req: Request) {
  const url = req.url;
}

export const config = {
  matcher: ["/user/:path*", "/admin/:path*"],
};
