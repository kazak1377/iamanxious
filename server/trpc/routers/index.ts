import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { getXataClient } from "~/server/db/xata";

export const appRouter = router({
    hello: publicProcedure
        .input(
            z.object({
                text: z.string().nullish(),
            }),
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input?.text ?? "world"}`,
            };
        }),
    worries: publicProcedure.query(() => {
        const client = getXataClient();
        const resp = client.db.worries.getAll();
        return resp;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
