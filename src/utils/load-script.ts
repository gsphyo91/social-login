interface LoadScriptInterface {
  id: string;
  src: string;
  onError: (err: string | Event) => void;
  onLoad: () => void;
}

export const loadScript = ({ id, src, onError, onLoad }: LoadScriptInterface) => {
  const element = document.getElementsByTagName("script")[0];
  let js = element;
  js = document.createElement("script");
  js.id = id;
  js.src = src;

  if (element && element.parentNode) {
    element.parentNode.insertBefore(js, element);
  } else {
    document.head.appendChild(js);
  }

  js.onerror = onError;

  js.onload = onLoad;
};
