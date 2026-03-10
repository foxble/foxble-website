const PIXEL_ID = process.env.META_PIXEL_ID
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN

export async function sendMetaEvent({
  eventName,
  eventSourceUrl,
  email,
  firstName,
  clientIpAddress,
  clientUserAgent,
}: {
  eventName: string
  eventSourceUrl: string
  email?: string
  firstName?: string
  clientIpAddress?: string
  clientUserAgent?: string
}) {
  if (!PIXEL_ID || !ACCESS_TOKEN) return

  const eventTime = Math.floor(Date.now() / 1000)

  const userData: Record<string, string> = {}
  if (clientIpAddress) userData.client_ip_address = clientIpAddress
  if (clientUserAgent) userData.client_user_agent = clientUserAgent

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: eventTime,
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: userData,
      },
    ],
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )
    const result = await response.json()
    if (!response.ok) {
      console.error('Meta CAPI error:', result)
    }
  } catch (error) {
    console.error('Meta CAPI request failed:', error)
  }
}
