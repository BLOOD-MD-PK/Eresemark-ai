/**
 * ============================================
 * EraseMark AI
 * Rate Limit Middleware
 * ============================================
 */

const requests = new Map();

const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW) || 60000;
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX) || 20;

export function rateLimit(req, res) {

    const ip =
        req.headers["x-forwarded-for"] ||
        req.socket?.remoteAddress ||
        "unknown";

    const now = Date.now();

    if (!requests.has(ip)) {
        requests.set(ip, {
            count: 1,
            startTime: now
        });

        return true;
    }

    const data = requests.get(ip);

    if (now - data.startTime > WINDOW_MS) {

        data.count = 1;
        data.startTime = now;

        requests.set(ip, data);

        return true;

    }

    data.count++;

    if (data.count > MAX_REQUESTS) {

        res.status(429).json({
            success: false,
            message: "Too many requests. Please try again later."
        });

        return false;

    }

    requests.set(ip, data);

    return true;

}