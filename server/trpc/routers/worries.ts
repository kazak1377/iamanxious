import { publicProcedure, router } from "../trpc";
import { latestWorries, createWorry } from "../../services/worries.service";
import { z } from "zod";

const hasEmail = (text: string) => /\S+@\S+\.\S+/.test(text);
const hasLink = (text: string) =>
    /(\bhttps?:\/\/[^\s]+|\bwww\.[^\s]+|\b[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b)/.test(
        text,
    );

const hasPhoneNumber = (text: string) =>
    /(\+?[\d]{1,3}[\s-]?[\d]{1,4}[\s-]?([\d]{3}[\s-]?[\d]{4}|\d{6,7}|\d{3}[\s-]?[\d]{2}[\s-]?[\d]{2,3})|\(\d{2,3}\)\s*\d{3}[\s-]?[\d]{2,3})/.test(
        text,
    );

const noForbiddenContent = (text: string) => {
    return !hasEmail(text) && !hasLink(text) && !hasPhoneNumber(text);
};

const isSafeContent = (text: string) => {
    const specialCharLimit = 0.2; // 20% of the text can be special characters
    const specialCharacters = /[^a-zA-Z0-9 \.,'"\?!;:\n]/g;
    const specialCharCount = (text.match(specialCharacters) || []).length;

    if (specialCharCount / text.length > specialCharLimit) {
        return false;
    }

    // Example of blocking a specific ASCII pattern - adjust as needed
    if (/8={3,}D/.test(text)) {
        return false;
    }

    return true;
};

export const worriesRouter = router({
    latest: publicProcedure.query(async () => {
        return latestWorries();
    }),
    create: publicProcedure
        .input(
            z.object({
                worry: z
                    .string()
                    .max(
                        300,
                        "Sorry, we cannot accept worries longer than 300 characters.",
                    )
                    .refine(
                        (worry) => worry.trim().length > 0,
                        "Worry cannot be empty.",
                    )
                    .refine(
                        noForbiddenContent,
                        "It's not safe to share personal information.",
                    )
                    .refine(
                        isSafeContent,
                        "We are not welcoming this kind of content. Please use less special characters.",
                    ),
            }),
        )
        .mutation(async ({ input }) => {
            return createWorry(input.worry);
        }),
});
