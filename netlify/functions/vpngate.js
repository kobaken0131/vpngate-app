exports.handler = async function () {
  const urls = [
    "https://www.vpngate.net/api/iphone/",
    "http://www.vpngate.net/api/iphone/"
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (res.ok) {
        const text = await res.text();
        if (text.includes("#HostName")) {
          return { statusCode: 200, headers: { "Content-Type": "text/plain; charset=utf-8" }, body: text };
        }
      }
    } catch (e) {}
  }
  return { statusCode: 502, body: "Failed to fetch VPN Gate list" };
};
