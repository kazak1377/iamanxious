import { publicProcedure, router } from "../trpc";
import { latestWorries, createWorry } from "../../services/worries.service";
import { z } from "zod";

export const worriesRouter = router({
    latest: publicProcedure.query(async () => {
        return latestWorries();
    }),
    create: publicProcedure
        .input(
            z.object({
                worry: z.string().nonempty(),
            }),
        )
        .mutation(async ({ input }) => {
            return createWorry(input.worry);
        }),
});
