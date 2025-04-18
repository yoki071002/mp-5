"use client"
import { useState } from "react";
import { Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { LinkProps } from "@/types";

const base = "https://cs391-url-shortener.vercel.app";

export default function LinkPreview({ link }: { link: LinkProps }) {
    const [copied, setCopied] = useState(false);
    const newUrl = `${base}/${link.alias}`;

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(newUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            alert("Failed to copy.");
        }
    }
    
    return (
        <div className="bg-white text-purple-900 rounded-xl shadow-md p-4 m-2 w-96 border border-white-300">
            <h4 className="font-bold text-lg">Your shortened URL: </h4>
            <a 
                href={`/r/${link.alias}`}
                className="text-purple-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                {newUrl};
            </a>
            <div className="flex justify-center items-center gap-2 mb-2">
                {copied && <CheckCircle className="text-green-500" />}
            </div>
            <Button
                variant="outlined"
                onClick={copy}
                sx={{
                    color: "purple",
                    borderColor: "purple",
                    '&:hover': {
                        borderColor: "#7e22ce",
                        backgroundColor: "#f3e8ff"
                    }
                }}
            >
                Copy URL
            </Button>
        </div>
    )
}