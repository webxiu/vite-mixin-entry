function isMobilePath(pathname: string) {
  return pathname === "/pc" || pathname.startsWith("/pc/");
}

let currentUnmount = () => {};

async function loadAndMount() {
  if (isMobilePath(location.pathname)) {
    const pc = await import("./src2/bootstrap"); // src2 下
    currentUnmount();
    currentUnmount = pc.mount("#app");
  } else {
    const mobile = await import("./src/bootstrap"); // src 下, 输入错误默认进入 移动端
    currentUnmount();
    currentUnmount = mobile.mount("#app");
  }
}

// 进入页面时挂载
loadAndMount();

// 可选：监听浏览器前进后退
window.addEventListener("popstate", loadAndMount);
