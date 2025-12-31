export default function handler(req, res) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.imgur.com/p8n2193.png" />
        <meta property="fc:frame:input:text" content="Share your best memory of 2025..." />
        <meta property="fc:frame:button:1" content="Generate Image" />
        <meta property="fc:frame:post_url" content="https://diaryapp.vercel.app/api/image" />
      </head>
      <body>
          <h1>diaryapp</h1>
      </body>
    </html>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
