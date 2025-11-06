const rootDom = document.getElementById("app")!;

function isMobilePath(pathname: string) {
  return pathname === "/pc" || pathname.startsWith("/pc/");
}

let currentUnmount = () => {};

async function loadAndMount() {
  currentUnmount();
  if (isMobilePath(location.pathname)) {
    const pc = await import("./src2/bootstrap");
    currentUnmount = pc.mount(rootDom, "/pc");
  } else {
    const mobile = await import("./src/bootstrap");
    currentUnmount = mobile.mount(rootDom, "/mobile");
  }
}

// 进入页面时挂载
loadAndMount();

// 可选：监听浏览器前进后退
window.addEventListener("popstate", loadAndMount);
