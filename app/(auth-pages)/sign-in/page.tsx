"use client";
import type { Message } from "@/components/form-message";
import { createClient } from "@/lib/supabase/client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login({ searchParams }: { searchParams: Message }) {
  const client = createClient();
  return (
    <Auth
      supabaseClient={client}
      appearance={{ theme: ThemeSupa }}
      providers={["google"]}
      localization={{
        variables: {
          sign_up: {
            email_label: "メールアドレス",
            password_label: "パスワードを作成",
            email_input_placeholder: "あなたのメールアドレス",
            password_input_placeholder: "あなたのパスワード",
            button_label: "サインアップ",
            loading_button_label: "サインアップ中...",
            social_provider_text: "{{provider}}アカウントでサインアップ",
            link_text: "アカウントをお持ちでないですか？サインアップ",
            confirmation_text: "確認リンクがメールに送信されました",
          },
          sign_in: {
            email_label: "メールアドレス",
            password_label: "あなたのパスワード",
            email_input_placeholder: "あなたのメールアドレス",
            password_input_placeholder: "あなたのパスワード",
            button_label: "サインイン",
            loading_button_label: "サインイン中...",
            social_provider_text: "{{provider}}アカウントでサインイン",
            link_text: "すでにアカウントをお持ちですか？サインイン",
          },
          forgotten_password: {
            email_label: "メールアドレス",
            button_label: "パスワードをリセット",
            loading_button_label: "リセット中...",
            link_text: "パスワードをお忘れですか？",
            email_input_placeholder: "あなたのメールアドレス",
            confirmation_text: "リセットリンクがメールに送信されました",
          },
        },
      }}
    />
    // <form className="flex-1 flex flex-col min-w-64">
    //   <h1 className="text-2xl font-medium">Sign in</h1>
    //   <p className="text-sm text-foreground">
    //     Don't have an account?{" "}
    //     <Link className="text-foreground font-medium underline" href="/sign-up">
    //       Sign up
    //     </Link>
    //   </p>
    //   <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
    //     <Label htmlFor="email">Email</Label>
    //     <Input name="email" placeholder="you@example.com" required />
    //     <div className="flex justify-between items-center">
    //       <Label htmlFor="password">Password</Label>
    //       <Link
    //         className="text-xs text-foreground underline"
    //         href="/forgot-password"
    //       >
    //         Forgot Password?
    //       </Link>
    //     </div>
    //     <Input
    //       type="password"
    //       name="password"
    //       placeholder="Your password"
    //       required
    //     />
    //     <SubmitButton pendingText="Signing In..." formAction={signInAction}>
    //       Sign in
    //     </SubmitButton>
    //     <FormMessage message={searchParams} />
    //   </div>
    // </form>
  );
}
