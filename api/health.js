/**
 * ============================================
 * EraseMark AI
 * Health Check API
 * ============================================
 */

export default async function handler(req, res) {

    // Allow only GET requests
    if (req.method !== "GET") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed"
        });
    }

    return res.status(200).json({

        success: true,

        status: "online",

        service: "EraseMark AI",

        version: "1.0.0",

        timestamp: new Date().toISOString(),

        environment:
            process.env.NODE_ENV || "development"

    });

}