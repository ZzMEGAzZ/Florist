import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { AuthProvider } from './utils/serverAuthProvider';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const path = url.pathname.split('/').filter((x) => x !== '');
    const lastPath = path[path.length - 1];

    if (AuthProvider.getAccessToken()) {
        if (url.pathname === '/login' || url.pathname === '/register') {
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
    } else {
        return NextResponse.next();
    }

}