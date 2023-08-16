
import {secret} from '../../secret.mjs'

export function getInsights(
  content: string,
//   stream = false,
//   max_tokens = 20
): Promise<any> {
  return fetch(
    "https://iogpt-api-management-service.azure-api.net/openai/api/proxy/openai/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "iO-GPT-Subscription-Key": secret,
      },
      body: JSON.stringify({
        model: "gpt-35-turbo",
        messages: [
          {
            role: "user",
            content,
          },
        ],
      }),
    }
  ).then((res) => res.json());
}

/**
 * 
 * 
curl --request POST \
  --url https://iogpt-api-management-service.azure-api.net/openai/api/proxy/openai/completions \
  --header 'Content-Type: application/json' \
  --header 'iO-GPT-Subscription-Key: e8abb061d1884c4bbdd34e35f39b6114' \
  --data '{
        "prompt":"once upon a time",
        "max_tokens": 20,
        "stream": true
}'
 */
