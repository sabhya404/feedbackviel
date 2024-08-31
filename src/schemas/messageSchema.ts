import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "atleast 10 characters")
    .max(300, "bas kaafi hai"),
});
