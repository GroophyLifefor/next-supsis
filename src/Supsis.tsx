import React from 'react';

export function Supsis({src}: {src: string}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.supsis = window.supsis || function () {
    (supsis.q = supsis.q || []).push(arguments);
  };
  supsis.l = +new Date();
`,
        }}
      />
      <script
        src={src}
        type="text/javascript"
        async
      />
    </>
  );
}
