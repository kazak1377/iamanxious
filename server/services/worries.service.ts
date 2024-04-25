import { getXataClient } from "../db/xata";

const client = getXataClient();

export const latestWorries = async () => {
    const worries = await client.db.worries.getPaginated({
        sort: {
            column: "xata_createdat",
            direction: "desc",
        },
        pagination: {
            size: 10,
            offset: 0,
        },
    });
    return worries;
};
