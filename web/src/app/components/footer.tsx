import { Mails } from "lucide-react";
import { FC } from "react";
import Locale from "../locales";
export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">{Locale.Footer.statement}</div>
      <div className="flex gap-2 justify-center">
        <div>
          <a
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="https://lepton.ai/"
          >
            <Mails size={8} />
            Official Web Site
          </a>
        </div>
        <div>Get More Help!</div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <a
          className="hover:text-zinc-950"
          href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=vFOh8aTsWPbQsv7ckU8-Rih9w-N6PFom&authKey=uzWNwmUSGD32aKVIGINOAcDrx0BC2I7uPz1mIMsM%2B5yygh8FIrDh7DMkRFQV2j4x8&noverify=0&group_code=330316577"
        >
          QQ群
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://discord.com/invite/CKrvgCyK4y"
        >
          Discord
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://github.com/fatwang2/search4all"
        >
          Github
        </a>
      </div>
    </div>
  );
};