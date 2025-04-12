"use client";

import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { useRouter } from "next/navigation";

export default function LoginAuth() {
  const router = useRouter();

  /**
   * Handles login through the specified provider.
   * Currently supports only Google OAuth2.0.
   * Redirects the user to the Google authentication page.
   *
   * @param provider - The name of the authentication provider (e.g., 'google').
   */
  const handleLogin = async (provider: string) => {
    try {
      if(provider == 'google') {
        // Environment variables for Google OAuth
      const clientId = process.env.NEXT_PUBLIC_API_GOOGLE_CLIENT_ID;
      const redirectUri = process.env.NEXT_PUBLIC_API_REDIRECT_URI;

      // Base URL for Google OAuth2.0 authorization
      const baseURL = `https://accounts.google.com/o/oauth2/v2/auth`;

      // Construct query parameters for OAuth2.0 request
      const params = new URLSearchParams({
        client_id: clientId || '',
        redirect_uri: redirectUri || '',
        response_type: "code",
        scope: "openid email profile",
        access_type: "offline",   // Request refresh token for long-lived access
        prompt: "consent",        // Always prompt the user for consent
      });

      // Redirect the user to Google’s OAuth2.0 authentication page
      window.location.href = `${baseURL}?${params.toString()}`;
      }

      else if(provider == 'github') {
        const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
        const redirectUri = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI;

      // Base URL for Google OAuth2.0 authorization
      const baseURL = `https://github.com/login/oauth/authorize`;

      // Construct query parameters for OAuth2.0 request
      const params = new URLSearchParams({
        client_id: clientId || '',
        redirect_uri: redirectUri || '',
        scope: "read:user user:email",
        allow_signup: "true",
      });

      // Redirect the user to Google’s OAuth2.0 authentication page
      window.location.href = `${baseURL}?${params.toString()}`;
      }
    } catch (error) {
      // Redirect to login page if any error occurs during authentication
      router.replace("/login");
      console.error(`Error signing in with ${provider}:`, error);
    }
  };



  return (
    <div className="flex flex-col space-y-4 mt-4">
      {/* Google Sign In */}
      <button
        onClick={() => handleLogin("google")}
        className="flex items-center justify-center border hover:border-2 border-gray-500 hover:border-gray-900 rounded-xl p-2 hover:bg-gray-200 transition-all"
      >
        <FcGoogle size={24} />
        <span className="ml-2 font-medium">Sign in with Google</span>
      </button>

      {/* GitHub Sign In */}
      <button
        onClick={() => handleLogin("github")}
        className="flex items-center justify-center border hover:border-2 border-gray-500 hover:border-gray-900 rounded-xl p-2 hover:bg-gray-200 transition-all"
      >
        <FaGithub size={24} />
        <span className="ml-2 font-medium">Sign in with GitHub</span>
      </button>
    </div>
  );
}
