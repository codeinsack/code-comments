import "./Preview.css";
import { FC, useEffect, useRef } from "react";

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head>
      <style>
        html {background-color: white;}
      </style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch(error) {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + error + '</div>'
              console.error(error);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        sandbox="allow-scripts"
        title="preview"
        srcDoc={html}
      />
    </div>
  );
};

export default Preview;