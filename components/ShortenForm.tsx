"use client";
import createNewLink from "@/lib/createNewLink";
import { LinkProps } from "@/types";
import { Textarea } from "@mui/joy";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function ShortenForm({
    setLink,
}: {
    setLink: (link: LinkProps) => void;
}) {
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");
    const [errorte, setErrorte] = useState("");

    return (
        <form
            className="bg-white text-purple-900 rounded-xl shadow-md p-4 m-2 w-96 border border-white-300"
            onSubmit={async (event) => {
                event.preventDefault();
                setErrorte("");
                const result = await createNewLink(alias, url);
                if (result.success) {
                    setLink(result.link);
                    setAlias("");
                    setUrl("");
                } else {
                    setErrorte(result.message);
                }
            }}
        >
            <TextField 
                variant="filled"
                sx={{ 
                    backgroundColor: "white", 
                    width: "100%"}}
                label="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />

            <h4 className="text-lg">Enter the URL to shorten:</h4>

            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderColor: "black", 
                    backgroundColor: "white",
                    marginBottom: "1rem"
                }}
                variant="soft"
                placeholder="Original URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            {errorte && (
                <div className="text-red-700 font-semibold mt-2">{errorte}</div>
            )}

            <div className="w-full flex justify-center">
                <Button
                    sx={{ 
                        width: "80px",
                        backgroundColor: alias && url ? '#6B46C1' : '#E2E8F0' 
                    }}
                    variant="contained"
                    type="submit"
                    disabled={alias === "" || url === ""}
                >
                    Shorten
                </Button>
            </div>

        </form>
    )
}