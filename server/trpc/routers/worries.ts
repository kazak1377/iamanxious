import { publicProcedure, router } from "../trpc";
import { latestWorries } from "../../services/worries.service";

export const worriesRouter = router({
    latest: publicProcedure.query(async () => {
        return latestWorries();
    }),
});
