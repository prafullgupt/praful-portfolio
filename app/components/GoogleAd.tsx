"use client"

import { useEffect } from "react"

declare global {
    interface Window {
        adsbygoogle: unknown[]
    }
}

interface GoogleAdProps {
    slot: string
    format?: string
    responsive?: boolean
    className?: string
}

export default function GoogleAd({
    slot,
    format = "auto",
    responsive = true,
    className = "",
}: GoogleAdProps) {
    useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                ; (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (error) {
            console.error("AdSense error:", error)
        }
    }, [])

    // Read Publisher client ID from .env (fallback to default account if not defined)
    const client = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "ca-pub-6386302858967654"

    if (!client) {
        return null
    }

    return (
        <div className={`google-ad ${className}`}>
            <ins
                className="adsbygoogle"
                style={{
                    display: "block",
                }}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive ? "true" : "false"}
            />
        </div>
    )
}