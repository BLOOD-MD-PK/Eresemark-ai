/**
 * ============================================
 * EraseMark AI
 * Remove Watermark API
 * ============================================
 */

import formidable from "formidable";
import fs from "fs/promises";

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({

            success: false,

            message: "Method Not Allowed"

        });

    }

    try {

        const form = formidable({

            multiples: false,

            keepExtensions: true

        });

        const [fields, files] =
            await form.parse(req);

        const image =
            files.image?.[0] ||
            files.image;

        if (!image) {

            return res.status(400).json({

                success: false,

                message: "No image uploaded."

            });

        }

        // Read uploaded image

        const buffer =
            await fs.readFile(
                image.filepath
            );

        /**
         * =====================================
         * AI Processing
         * Replace this later
         * =====================================
         */

        const base64 =
            buffer.toString("base64");

        return res.status(200).json({

            success: true,

            message:
                "Processing completed.",

            image:
                `data:${image.mimetype};base64,${base64}`

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message:
                "Internal Server Error"

        });

    }

}