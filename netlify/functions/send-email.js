exports.handler = async (event) => {
  // フォームから送られてきたデータ（名前、メール、メッセージ）を受け取る
  const body = JSON.parse(event.body);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, // ここでNetlifyの金庫から鍵を取り出します
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'hrg.20260113@gmail.com', // 宛先
      subject: 'お問い合わせがありました',
      html: `名前: ${body.name}<br>メール: ${body.email}<br>メッセージ: ${body.message}`
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "送信完了！" })
  };
};
