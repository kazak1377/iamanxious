import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { worriesRouter } from "./worries";

export const appRouter = router({
    worries: worriesRouter,
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
});

// export type definition of API
export type AppRouter = typeof appRouter;
