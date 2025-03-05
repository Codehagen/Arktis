import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = siteConfig.description;
export const size = {
  width: 1200,
  height: 630,
};

// Image response
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
