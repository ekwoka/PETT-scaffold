export const EsbuildLogo = (props: { class?: string }) => (
  <div
    class={`${
      props.class || 'w-full max-w-screen-sm text-white'
    } flex flex-row items-center justify-center gap-x-4`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      class="h-full w-auto"
      viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="100" fill="#FFCF00" />
      <path
        d="M47.5 52.5L95 100l-47.5 47.5m60-95L155 100l-47.5 47.5"
        fill="none"
        stroke="#191919"
        stroke-width="24"
      />
    </svg>
    <span class="font-sans text-7xl font-bold">esbuild</span>
  </div>
);
