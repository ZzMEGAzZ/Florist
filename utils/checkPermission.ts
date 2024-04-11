const super_admin_Permission = ['dashboard', 'overview', 'event', 'setup-event', 'corporate', 'manage-corporate', 'beacon', 'setting-beacon', 'announcement', 'manage-announcement'];
const admin_Permission = ['dashboard', 'overview', 'event', 'setup-event', 'beacon', 'setting-beacon', 'announcement', 'manage-announcement'];
const user = ['dashboard', 'overview',];

export default function checkPermission(role: string, path: string) {
    if (role === 'super_admin') {
        return super_admin_Permission.includes(path);
    } else if (role === 'admin') {
        return admin_Permission.includes(path);
    } else if (role === 'user') {
        return user.includes(path);
    } else {
        return false;
    }
}