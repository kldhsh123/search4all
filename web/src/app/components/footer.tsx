import { Mails } from "lucide-react"; // 导入Mails图标
import { FC } from "react"; // 导入Locale对象
import Locale from "../locales";
export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">{Locale.Footer.statement}</div>
      <div className="flex gap-2 justify-center">
        <div>
          <a
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="https://www.myai.asia/"
          >
            官网
          </a>
        </div>
        <div>
          <a
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="https://discord.com/invite/CKrvgCyK4y"
          >
            Discord群
          </a>
        </div>
        <div>
          <a
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=vFOh8aTsWPbQsv7ckU8-Rih9w-N6PFom&authKey=uzWNwmUSGD32aKVIGINOAcDrx0BC2I7uPz1mIMsM%2B5yygh8FIrDh7DMkRFQV2j4x8&noverify=0&group_code=330316577"
          >
            QQ群
          </a>
        </div>
      </div>
    </div>
  );
};
