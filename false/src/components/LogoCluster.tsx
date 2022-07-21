import { EsbuildLogo } from './logos/EsbuildLogo';
import { PreactLogo } from './logos/PreactLogo';
import { TailwindLogo } from './logos/TailwindLogo';
import { TypescriptLogo } from './logos/TypescriptLogo';

export const LogoCluster = () => (
  <div class="flex w-full flex-col items-center gap-y-8 p-8">
    <PreactLogo class="max-h-20 w-full max-w-screen-sm text-gray-800" />
    <EsbuildLogo class="max-h-20 w-full max-w-screen-sm text-white" />
    <TailwindLogo class="max-h-20 w-full max-w-screen-sm text-white" />
    <TypescriptLogo class="max-h-20 w-full max-w-screen-sm text-white" />
  </div>
);
