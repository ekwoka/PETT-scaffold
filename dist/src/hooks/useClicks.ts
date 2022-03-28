import { useEffect } from 'preact/hooks';
import { useGlobalState } from 'preact-global-state';

let toAdd = 0;
let initialized = false;
let perSecond = 0;

type UseClicks = {
  clicks: number;
};

export function useClicks(): UseClicks {
  const [clicks, setClicks] = useGlobalState<number>('clicks', 0);
  useEffect(() => initUI(setClicks), []);

  return { clicks };
}

const initUI = (setClicks: (v: number) => void) => {
  if (initialized) return;
  let lastFrame = Date.now();
  let lastValue = 0;
  perSecond = 10;
  const updateUI = (currentFrame: number) => {
    const diff: number = currentFrame - lastFrame;
    const transfer: number = Math.ceil(toAdd * (diff / 500));
    toAdd -= transfer;
    setClicks(lastValue + transfer);
    lastFrame = currentFrame;
    lastValue += transfer;
    requestAnimationFrame(updateUI);
  };
  requestAnimationFrame(updateUI);
  initialized = true;
};

const autoClick = () => (toAdd += perSecond);

setInterval(autoClick, 1000);
