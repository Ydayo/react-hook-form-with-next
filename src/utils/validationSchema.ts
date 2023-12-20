import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .min(1, "名前は必須です")
    .min(4, "名前は4文字以上で入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスは必須です")
    .min(4, "名前は4文字以上で入力してください"),
  password: z
    .string()
    .min(1, "パスワードは必須です")
    .min(4, "名前は4文字以上で入力してください"),
});

export type validationSchemaTypes = z.infer<typeof validationSchema>;
