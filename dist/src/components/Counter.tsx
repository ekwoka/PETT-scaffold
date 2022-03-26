import { useClicks } from '../hooks/useClicks';

export const Counter = () => {
  const { clicks } = useClicks();

  return (
    <div class="flex max-w-max flex-col gap-y-2 text-neutral-100">
      <span>Count: {clicks}</span>
    </div>
  );
};
