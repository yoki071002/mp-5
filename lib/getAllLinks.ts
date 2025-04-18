import { LinkProps } from "@/types";
import getCollection, {LINKS_COLLECTION} from "@/database";

export default async function getAllLinks(): Promise<LinkProps[]>{
    const linksCollection = await getCollection(LINKS_COLLECTION);
    const data = await linksCollection.find().toArray();

    const links: LinkProps[] = data.map((l) => ({
        alias: l.alias,
        url: l.url
    }));

    return links.reverse();
}