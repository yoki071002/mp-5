"use client";
import { LinkProps } from "@/types";
import { useState } from "react";
import LinkPreview from "./LinkPreview";
import ShortenForm from "./ShortenForm";

export default function LinksDisplay({
    inputLinks,
}: {
    inputLinks: LinkProps[];
}) {
    const [links, setLinks] = useState<LinkProps | null>(null);

    return (
        <div className="flex flex-col items-center">
            <ShortenForm
                setLink={(newLink: LinkProps) => {
                    setLinks(newLink);
                }}
            />
            {links && <LinkPreview link={links} />}
        </div>
    )
}