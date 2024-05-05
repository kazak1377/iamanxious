import { getXataClient } from "../db/xata";

const client = getXataClient();

export const latestWorries = async () => {
    const worries = await client.db.worries.getPaginated({
        sort: {
            column: "xata_createdat",
            direction: "desc",
        },
        pagination: {
            size: 12,
            offset: 0,
        },
    });
    return {
        worries: worries.records.toArray(),
    };
};

export const getLatestWorrie = async () => {
    const worry = await client.db.worries.getFirst({
        sort: {
            column: "xata_createdat",
            direction: "desc",
        },
    });

    return {
        lastWorry: worry,
    };
};

export const createWorry = async (worry: string) => {
    const newWorry = await client.db.worries.create({
        worry_text: worry,
    });
    return newWorry;
};
