import { 
  Inter,Lusitana,Roboto,Roboto_Mono,
  Noto_Sans_SC
 } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

// export const notoSansSC = Noto_Sans_SC({
//   subsets: ["chinese-simplified"], // 仅加载简体中文，减少字体体积
//   weight: ["400", "700"], // 选择常用的 400 和 700
// });