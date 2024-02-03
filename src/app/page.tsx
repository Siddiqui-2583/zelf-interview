import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className=''>
      <a href="/api/auth/login">Login</a>

      {/* // "dev": "next dev -p 3000 & local-ssl-proxy --key ./localhost-key.pem --cert ./localhost.pem --source 443 --target 3000" */}
      {/* https://127.0.0.1:3000 */}
      {/* https://dev-efcxwkmg0abd2mje.us.auth0.com/authorize?client_id=xAh2LbHLQ2xNCwm8Ik2Y8rVdREIbXV2l&scope=openid%20profile&response_type=code&redirect_uri=https%3A%2F%2F127.0.0.1%3A3000%2Fapi%2Fauth%2Fcallback&audience=https%3A%2F%2Fdev-efcxwkmg0abd2mje.us.auth0.com%2Fapi%2Fv2%2F&nonce=oYrjiMeNpmaYGZtfBW11qkCbX2qXg-1mT7LHWhtwJfI&state=eyJyZXR1cm5UbyI6Imh0dHBzOi8vMTI3LjAuMC4xOjMwMDAifQ&code_challenge_method=S256&code_challenge=VzrONdJKwCriy6vgmBTSYplfnVgkTiP_avzVT2SIYmc */}

      {/* Created a new certificate valid for the following names 📜
 - "localhost"

The certificate is at "./localhost.pem" and the key at "./localhost-key.pem" ✅

It will expire on 3 May 2026 */}
    </main>
  );
}
