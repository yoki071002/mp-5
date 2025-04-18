import { redirect } from "next/navigation";
import getCollection, {LINKS_COLLECTION} from "@/database";

type LinkRecord = {
    alias: string;
    url: string;
}

export default async function RedirectPage({
    params,
}: {
    params: {alias: string};
}): Promise<void> {
    const { alias } = params;
    const collection = await getCollection(LINKS_COLLECTION);
    const record = await collection.findOne<LinkRecord>({ alias });

    if (!record || !record.url) {
        redirect("/");
    }

    redirect(record.url);
}