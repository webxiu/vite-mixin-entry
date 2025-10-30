// main.ts
const appContainer = document.getElementById("app")!;

function isMobilePath(pathname: string) {
  return pathname === "/pc" || pathname.startsWith("/pc/");
}

let currentUnmount: (() => void) | undefined;

async function loadAndMount() {
  if (isMobilePath(location.pathname)) {
    const pc = await import("./src2/bootstrap"); // src2 下
    currentUnmount?.();
    currentUnmount = pc.mount(appContainer);
  } else {
    const mobile = await import("./src/bootstrap"); // src 下
    currentUnmount?.();
    currentUnmount = mobile.mount(appContainer);
  }
}

// 进入页面时挂载
loadAndMount();

// 可选：监听浏览器前进后退
window.addEventListener("popstate", loadAndMount);
