import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { AuthProvider } from './utils/serverAuthProvider';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const path = url.pathname.split('/').filter((x) => x !== '');

    if (AuthProvider.getAccessToken()) {
        if (url.pathname === '/login' || url.pathname === '/register') {
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
    } else {
        if (url.pathname === '/checkout' || url.pathname === '/cart' || url.pathname === '/order') {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }
}
