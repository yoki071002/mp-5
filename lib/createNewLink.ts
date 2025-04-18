"use server";
import getCollection, { LINKS_COLLECTION } from "@/database";
import { LinkProps } from "@/types";
import { urlBoolean } from "@/lib/urlBoolean";

export default async function createNewLink(
    alias: string,
    url: string,
): Promise<{ success: true; link: LinkProps } | { success: false; message: string }> {
    
    if (!urlBoolean(url)) {
        return { success: false, message: "Invalid URL format. Please try again." };
    }

    const linksCollection = await getCollection(LINKS_COLLECTION);

    const exist = await linksCollection.findOne({ alias });
    if (exist) {
        return { success: false, message: "Alias already taken. Please choose another one." };
    }

    const res = await linksCollection.insertOne({alias, url});
    if (!res.acknowledged){
        return { success: false, message: "Database insert failed. Please try again." };
    }

    return { 
        success: true,
        link: { alias, url }
    };
}